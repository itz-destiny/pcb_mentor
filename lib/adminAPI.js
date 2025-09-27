import { supabase, supabaseAdmin, isSupabaseConfigured } from './supabase';

// Materials API functions
export const materialsAPI = {
  // Get all materials
  async getAll() {
    if (!isSupabaseConfigured || !supabase) {
      console.warn('Supabase not configured, returning empty array');
      return [];
    }
    
    const { data, error } = await supabase
      .from('materials')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Create new material
  async create(materialData) {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase not configured');
    }
    
    const { data, error } = await supabase
      .from('materials')
      .insert([materialData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating material:', error);
      throw error;
    }
    return data;
  },

  // Update material
  async update(id, materialData) {
    const { data, error } = await supabase
      .from('materials')
      .update(materialData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete material
  async delete(id) {
    const { error } = await supabase
      .from('materials')
      .update({ is_active: false })
      .eq('id', id);
    
    if (error) throw error;
  },

  // Upload file to storage
  async uploadFile(file, bucket = 'materials') {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file);
    
    if (error) throw error;
    
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);
    
    return { fileName, publicUrl };
  }
};

// Videos API functions
export const videosAPI = {
  // Get all videos
  async getAll() {
    if (!isSupabaseConfigured || !supabase) {
      console.warn('Supabase not configured, returning empty array');
      return [];
    }
    
    const { data, error } = await supabase
      .from('videos')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Create new video
  async create(videoData) {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase not configured');
    }
    
    const { data, error } = await supabase
      .from('videos')
      .insert([videoData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating video:', error);
      throw error;
    }
    return data;
  },

  // Update video
  async update(id, videoData) {
    const { data, error } = await supabase
      .from('videos')
      .update(videoData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete video
  async delete(id) {
    const { error } = await supabase
      .from('videos')
      .update({ is_active: false })
      .eq('id', id);
    
    if (error) throw error;
  },

  // Increment video views
  async incrementViews(videoId) {
    const { error } = await supabase.rpc('increment_video_views', {
      video_id: videoId
    });
    
    if (error) throw error;
  }
};

// Blog posts API functions
export const blogAPI = {
  // Get all blog posts
  async getAll() {
    if (!isSupabaseConfigured || !supabase) {
      console.warn('Supabase not configured, returning empty array');
      return [];
    }
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  // Get published blog posts
  async getPublished() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('publish_date', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  // Get blog post by slug
  async getBySlug(slug) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Create new blog post
  async create(postData) {
    if (!isSupabaseConfigured || !supabase) {
      throw new Error('Supabase not configured');
    }
    
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([postData])
      .select()
      .single();
    
    if (error) {
      console.error('Error creating blog post:', error);
      throw error;
    }
    return data;
  },

  // Update blog post
  async update(id, postData) {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(postData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Delete blog post
  async delete(id) {
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  // Publish/unpublish blog post
  async togglePublish(id, published) {
    const updateData = { published };
    if (published) {
      updateData.publish_date = new Date().toISOString();
    } else {
      updateData.publish_date = null;
    }

    const { data, error } = await supabase
      .from('blog_posts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Increment blog post views
  async incrementViews(postId) {
    const { error } = await supabase.rpc('increment_blog_views', {
      post_id: postId
    });
    
    if (error) throw error;
  }
};

// Admin API functions
export const adminAPI = {
  // Check if user is admin using the helper function
  async isAdmin(userId) {
    const { data, error } = await supabase.rpc('is_admin', {
      user_uuid: userId
    });
    
    if (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
    
    return data;
  },

  // Get admin user info
  async getAdminUser(userId) {
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .eq('user_id', userId)
      .eq('is_active', true)
      .single();
    
    if (error) throw error;
    return data;
  },

  // Create admin user
  async createAdminUser(adminData) {
    const { data, error } = await supabase
      .from('admin_users')
      .insert([adminData])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};

// File upload API functions
export const fileAPI = {
  // Upload file to storage
  async uploadFile(file, bucket = 'materials', folder = '') {
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file);
    
    if (error) throw error;
    
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);
    
    // Log file upload
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase
        .from('file_uploads')
        .insert([{
          filename: fileName,
          original_name: file.name,
          file_type: file.type,
          file_size: file.size,
          storage_path: fileName,
          uploaded_by: user.id
        }]);
    }
    
    return { fileName, publicUrl };
  },

  // Delete file from storage
  async deleteFile(fileName, bucket = 'materials') {
    const { error } = await supabase.storage
      .from(bucket)
      .remove([fileName]);
    
    if (error) throw error;
  },

  // Get file URL
  getFileUrl(fileName, bucket = 'materials') {
    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(fileName);
    
    return publicUrl;
  }
};
