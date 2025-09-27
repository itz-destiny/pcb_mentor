-- Migration script to add missing columns
-- Run this in your Supabase SQL Editor if you're getting column errors

-- Add missing columns to blog_posts table
DO $$ 
BEGIN
    -- Add image column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'blog_posts' AND column_name = 'image') THEN
        ALTER TABLE blog_posts ADD COLUMN image TEXT;
    END IF;
    
    -- Add excerpt column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'blog_posts' AND column_name = 'excerpt') THEN
        ALTER TABLE blog_posts ADD COLUMN excerpt TEXT;
    END IF;
    
    -- Add featured column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'blog_posts' AND column_name = 'featured') THEN
        ALTER TABLE blog_posts ADD COLUMN featured BOOLEAN DEFAULT false;
    END IF;
    
    -- Add tags column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'blog_posts' AND column_name = 'tags') THEN
        ALTER TABLE blog_posts ADD COLUMN tags TEXT[];
    END IF;
    
    -- Add views column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'blog_posts' AND column_name = 'views') THEN
        ALTER TABLE blog_posts ADD COLUMN views INTEGER DEFAULT 0;
    END IF;
    
    -- Add publish_date column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'blog_posts' AND column_name = 'publish_date') THEN
        ALTER TABLE blog_posts ADD COLUMN publish_date TIMESTAMP WITH TIME ZONE;
    END IF;
    
    -- Add created_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'blog_posts' AND column_name = 'created_at') THEN
        ALTER TABLE blog_posts ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
    
    -- Add updated_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'blog_posts' AND column_name = 'updated_at') THEN
        ALTER TABLE blog_posts ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
END $$;

-- Add missing columns to materials table
DO $$ 
BEGIN
    -- Add file_url column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'materials' AND column_name = 'file_url') THEN
        ALTER TABLE materials ADD COLUMN file_url TEXT;
    END IF;
    
    -- Add file_name column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'materials' AND column_name = 'file_name') THEN
        ALTER TABLE materials ADD COLUMN file_name TEXT;
    END IF;
    
    -- Add file_size column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'materials' AND column_name = 'file_size') THEN
        ALTER TABLE materials ADD COLUMN file_size INTEGER;
    END IF;
    
    -- Add image_url column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'materials' AND column_name = 'image_url') THEN
        ALTER TABLE materials ADD COLUMN image_url TEXT;
    END IF;
    
    -- Add preview_url column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'materials' AND column_name = 'preview_url') THEN
        ALTER TABLE materials ADD COLUMN preview_url TEXT;
    END IF;
    
    -- Add downloads column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'materials' AND column_name = 'downloads') THEN
        ALTER TABLE materials ADD COLUMN downloads INTEGER DEFAULT 0;
    END IF;
    
    -- Add is_active column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'materials' AND column_name = 'is_active') THEN
        ALTER TABLE materials ADD COLUMN is_active BOOLEAN DEFAULT true;
    END IF;
    
    -- Add created_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'materials' AND column_name = 'created_at') THEN
        ALTER TABLE materials ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
    
    -- Add updated_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'materials' AND column_name = 'updated_at') THEN
        ALTER TABLE materials ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
END $$;

-- Add missing columns to videos table
DO $$ 
BEGIN
    -- Add thumbnail column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'videos' AND column_name = 'thumbnail') THEN
        ALTER TABLE videos ADD COLUMN thumbnail TEXT;
    END IF;
    
    -- Add category column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'videos' AND column_name = 'category') THEN
        ALTER TABLE videos ADD COLUMN category TEXT DEFAULT 'Tutorial';
    END IF;
    
    -- Add views column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'videos' AND column_name = 'views') THEN
        ALTER TABLE videos ADD COLUMN views INTEGER DEFAULT 0;
    END IF;
    
    -- Add duration column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'videos' AND column_name = 'duration') THEN
        ALTER TABLE videos ADD COLUMN duration TEXT;
    END IF;
    
    -- Add is_active column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'videos' AND column_name = 'is_active') THEN
        ALTER TABLE videos ADD COLUMN is_active BOOLEAN DEFAULT true;
    END IF;
    
    -- Add created_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'videos' AND column_name = 'created_at') THEN
        ALTER TABLE videos ADD COLUMN created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
    
    -- Add updated_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'videos' AND column_name = 'updated_at') THEN
        ALTER TABLE videos ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
    END IF;
END $$;

-- Verify all columns exist
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_schema = 'public' 
    AND table_name IN ('blog_posts', 'materials', 'videos')
ORDER BY table_name, ordinal_position;
