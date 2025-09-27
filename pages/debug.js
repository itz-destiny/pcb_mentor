import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

const DebugPage = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [publishedPosts, setPublishedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      // Get all posts
      const { data: allData, error: allError } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (allError) throw allError;
      setAllPosts(allData || []);

      // Get published posts
      const { data: publishedData, error: publishedError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('publish_date', { ascending: false });

      if (publishedError) throw publishedError;
      setPublishedPosts(publishedData || []);

    } catch (error) {
      console.error('Error loading debug data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8">Loading debug data...</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Database Debug</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">All Blog Posts ({allPosts.length})</h2>
          <div className="space-y-4">
            {allPosts.map((post) => (
              <div key={post.id} className="border p-4 rounded-lg">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600">Slug: {post.slug}</p>
                <p className="text-sm text-gray-600">Published: {post.published ? '✅ Yes' : '❌ No'}</p>
                <p className="text-sm text-gray-600">Featured: {post.featured ? '✅ Yes' : '❌ No'}</p>
                <p className="text-sm text-gray-600">Publish Date: {post.publish_date || 'Not set'}</p>
                <p className="text-sm text-gray-600">Created: {new Date(post.created_at).toLocaleString()}</p>
                {post.image && (
                  <p className="text-sm text-gray-600">Image: {post.image.substring(0, 50)}...</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Published Posts */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Published Posts ({publishedPosts.length})</h2>
          <div className="space-y-4">
            {publishedPosts.map((post) => (
              <div key={post.id} className="border p-4 rounded-lg bg-green-50">
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600">Slug: {post.slug}</p>
                <p className="text-sm text-gray-600">Publish Date: {post.publish_date || 'Not set'}</p>
                <p className="text-sm text-gray-600">Created: {new Date(post.created_at).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Quick Actions:</h3>
        <div className="space-x-4">
          <button 
            onClick={loadData}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refresh Data
          </button>
          <a 
            href="/resources/blog"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 inline-block"
          >
            Go to Blog Page
          </a>
          <a 
            href="/admin"
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 inline-block"
          >
            Go to Admin
          </a>
        </div>
      </div>
    </div>
  );
};

export default DebugPage;
