import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { supabase } from '../../../lib/supabase';
import { blogAPI } from '../../../lib/adminAPI';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug) {
      loadBlogPost();
    }
  }, [slug]);

  const loadBlogPost = async () => {
    try {
      const data = await blogAPI.getBySlug(slug);
      setPost(data);
      
      // Increment view count
      if (data) {
        await blogAPI.incrementViews(data.id);
      }
    } catch (error) {
      console.error('Error loading blog post:', error);
      setError('Post not found');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full flex flex-col justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <a href="/resources/blog" className="text-[var(--color-primary)] hover:underline">
              ← Back to Blog
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex flex-col justify-start items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full h-[400px] relative overflow-hidden">
          <Image
            src={post.image || "/M1.png"}
            alt={post.title}
            fill
            className="w-full h-full object-cover"
            priority
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                {post.title}
              </h1>
              <p className="mt-4 text-white text-lg max-w-2xl">
                {post.excerpt}
              </p>
              <div className="mt-6 flex items-center space-x-4 text-white text-sm">
                <span>{post.views} views</span>
                <span>•</span>
                <span>{new Date(post.publish_date).toLocaleDateString()}</span>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span>•</span>
                    <div className="flex space-x-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-white/20 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
          </div>
          
          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/resources/blog" 
              className="inline-flex items-center text-[var(--color-primary)] hover:underline"
            >
              ← Back to Blog
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;