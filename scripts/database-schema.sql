-- Database Schema for PCB Mentor Website
-- Run this in your Supabase SQL Editor

-- Note: RLS (Row Level Security) is enabled by default in Supabase

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  image TEXT,
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  tags TEXT[],
  views INTEGER DEFAULT 0,
  publish_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create materials table
CREATE TABLE IF NOT EXISTS materials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL, -- PDF, ZIP, DOC, PPT
  file_url TEXT,
  file_name TEXT,
  file_size INTEGER,
  image_url TEXT,
  preview_url TEXT,
  downloads INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create videos table (already exists but let's ensure it has all fields)
CREATE TABLE IF NOT EXISTS videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  video_id TEXT NOT NULL,
  thumbnail TEXT,
  category TEXT DEFAULT 'Tutorial',
  views INTEGER DEFAULT 0,
  duration TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create file_uploads table for tracking uploaded files
CREATE TABLE IF NOT EXISTS file_uploads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER NOT NULL,
  storage_path TEXT NOT NULL,
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_materials_active ON materials(is_active);
CREATE INDEX IF NOT EXISTS idx_videos_active ON videos(is_active);
CREATE INDEX IF NOT EXISTS idx_videos_category ON videos(category);

-- Create functions for incrementing views
CREATE OR REPLACE FUNCTION increment_blog_views(post_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE blog_posts 
  SET views = views + 1 
  WHERE id = post_id;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION increment_video_views(video_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE videos 
  SET views = views + 1 
  WHERE id = video_id;
END;
$$ LANGUAGE plpgsql;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_uuid UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users 
    WHERE user_id = user_uuid AND is_active = true
  );
END;
$$ LANGUAGE plpgsql;

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE file_uploads ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Admin users can only be managed by admins
CREATE POLICY "Admin users are viewable by admins" ON admin_users
  FOR SELECT USING (is_admin(auth.uid()));

CREATE POLICY "Admin users are insertable by admins" ON admin_users
  FOR INSERT WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Admin users are updatable by admins" ON admin_users
  FOR UPDATE USING (is_admin(auth.uid()));

-- Blog posts policies
CREATE POLICY "Blog posts are viewable by everyone" ON blog_posts
  FOR SELECT USING (true);

CREATE POLICY "Blog posts are manageable by admins" ON blog_posts
  FOR ALL USING (is_admin(auth.uid()));

-- Materials policies
CREATE POLICY "Materials are viewable by everyone" ON materials
  FOR SELECT USING (is_active = true);

CREATE POLICY "Materials are manageable by admins" ON materials
  FOR ALL USING (is_admin(auth.uid()));

-- Videos policies
CREATE POLICY "Videos are viewable by everyone" ON videos
  FOR SELECT USING (is_active = true);

CREATE POLICY "Videos are manageable by admins" ON videos
  FOR ALL USING (is_admin(auth.uid()));

-- File uploads policies
CREATE POLICY "File uploads are viewable by admins" ON file_uploads
  FOR SELECT USING (is_admin(auth.uid()));

CREATE POLICY "File uploads are insertable by admins" ON file_uploads
  FOR INSERT WITH CHECK (is_admin(auth.uid()));

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
  ('materials', 'materials', true),
  ('blog-images', 'blog-images', true),
  ('material-images', 'material-images', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Materials bucket is accessible by everyone" ON storage.objects
  FOR SELECT USING (bucket_id = 'materials');

CREATE POLICY "Materials bucket is manageable by admins" ON storage.objects
  FOR ALL USING (bucket_id = 'materials' AND is_admin(auth.uid()));

CREATE POLICY "Blog images bucket is accessible by everyone" ON storage.objects
  FOR SELECT USING (bucket_id = 'blog-images');

CREATE POLICY "Blog images bucket is manageable by admins" ON storage.objects
  FOR ALL USING (bucket_id = 'blog-images' AND is_admin(auth.uid()));

CREATE POLICY "Material images bucket is accessible by everyone" ON storage.objects
  FOR SELECT USING (bucket_id = 'material-images');

CREATE POLICY "Material images bucket is manageable by admins" ON storage.objects
  FOR ALL USING (bucket_id = 'material-images' AND is_admin(auth.uid()));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at (only if they don't exist)
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_admin_users_updated_at') THEN
        CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_blog_posts_updated_at') THEN
        CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_materials_updated_at') THEN
        CREATE TRIGGER update_materials_updated_at BEFORE UPDATE ON materials
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'update_videos_updated_at') THEN
        CREATE TRIGGER update_videos_updated_at BEFORE UPDATE ON videos
            FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;
