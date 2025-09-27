import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { supabase, isSupabaseConfigured } from "../../../lib/supabase";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      console.warn('Supabase not configured, showing empty state');
      setLoading(false);
      return;
    }

    loadBlogPosts();
    
    // Set up real-time subscription
    const subscription = supabase
      .channel('blog-posts-changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'blog_posts' 
        }, 
        (payload) => {
          console.log('Blog post change received!', payload);
          loadBlogPosts(); // Reload posts when changes occur
        })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadBlogPosts = async () => {
    try {
      console.log('Loading blog posts...');
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('publish_date', { ascending: false });

      if (error) {
        console.error('Database error:', error);
        throw error;
      }
      
      console.log('Blog posts loaded:', data);
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      // Show all posts if there's an error (for debugging)
      try {
        const { data: allData } = await supabase
          .from('blog_posts')
          .select('*')
          .order('created_at', { ascending: false });
        console.log('All blog posts (including unpublished):', allData);
        setBlogPosts(allData || []);
      } catch (fallbackError) {
        console.error('Fallback query failed:', fallbackError);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex flex-col justify-start items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full h-[600px] relative overflow-hidden">
          <Image
            src="/blog.png"
            alt="Blog Hero Banner"
            width={1440}
            height={600}
            className="w-full h-full object-cover absolute top-0 left-0"
            priority
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/70 to-transparent flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="px-4 sm:px-6 lg:px-8 text-center"
            >
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold font-[var(--font-sans)] leading-tight">
                Learning Hub
              </h1>
              <p className="mt-2 text-white text-base sm:text-lg font-normal font-[var(--font-sans)] max-w-[600px] mx-auto">
                Explore practical content to help you grow as an engineer — from
                beginner basics to career strategies.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col justify-start items-center gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-start items-center gap-5 sm:gap-6"
          >
            <h2 className="w-full text-center text-[var(--color-primary)] text-2xl sm:text-3xl font-bold font-[var(--font-sans)]">
              Blog Posts
            </h2>
            <p className="w-full max-w-[530px] text-center text-[var(--color-foreground)] text-base sm:text-lg font-normal font-[var(--font-sans)] leading-normal">
              Explore practical content to help you grow as an engineer from
              beginner basics to career strategies.
            </p>
          </motion.div>

          {loading ? (
            <div className="w-full flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-full flex-1 p-5 bg-[#f0f0f0] rounded-[13px] flex flex-col justify-start items-start gap-5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-full h-[215px] overflow-hidden rounded-[17px]">
                  <Image
                    src={post.image || "/M1.png"}
                    alt={post.title}
                    width={400}
                    height={215}
                    className="w-full h-full object-cover rounded-[17px]"
                  />
                </div>
                <h3 className="w-full text-center text-[var(--color-foreground)] text-lg sm:text-xl font-bold font-[var(--font-sans)] leading-relaxed">
                  {post.title}
                </h3>
                <p className="w-full text-center text-[var(--color-foreground)] text-sm sm:text-base font-normal font-[var(--font-sans)] leading-tight">
                  {post.excerpt}
                </p>
                <div className="w-full inline-flex justify-start items-center">
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="text-[#473bf0] text-xs sm:text-sm font-normal font-[var(--font-sans)] leading-tight hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
