import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Script from 'next/script';
import { supabase } from '../../../lib/supabase';
import { videosAPI } from '../../../lib/adminAPI';

const VideoPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      loadVideo();
    }
  }, [id]);

  const loadVideo = async () => {
    try {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .single();

      if (error) throw error;
      setVideo(data);
      
      // Increment view count
      if (data) {
        await videosAPI.incrementViews(data.id);
      }
    } catch (error) {
      console.error('Error loading video:', error);
      setError('Video not found');
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

  if (error || !video) {
    return (
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Video Not Found</h1>
            <p className="text-gray-600 mb-6">The video you're looking for doesn't exist.</p>
            <a href="/resources/videos" className="text-[var(--color-primary)] hover:underline">
              ← Back to Videos
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* YouTube Subscribe script */}
      <Script
        src="https://apis.google.com/js/platform.js"
        strategy="lazyOnload"
      />

      <Navbar />
      <main className="w-full flex flex-col justify-start items-center overflow-hidden">
        {/* Hero Section */}
        <div className="w-full py-20 flex flex-col items-center justify-center bg-black text-center">
          <div className="px-4">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              {video.title}
            </h1>
            <p className="text-white text-lg max-w-3xl mx-auto mb-6">
              {video.description}
            </p>
            <div className="flex items-center justify-center space-x-4 text-white text-sm">
              <span className="px-3 py-1 bg-red-600 rounded-full">
                {video.category}
              </span>
              <span>{video.views} views</span>
              <span>•</span>
              <span>{new Date(video.created_at).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Video Content Section */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Video Embed */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Info */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Video</h2>
            <p className="text-gray-600 mb-6">{video.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
                <p className="text-gray-600">{video.category}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Views</h3>
                <p className="text-gray-600">{video.views}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Upload Date</h3>
                <p className="text-gray-600">{new Date(video.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* YouTube Channel CTA */}
          <div className="mt-8">
            <div className="rounded-lg bg-white shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-gray-900 text-xl font-bold">
                  Follow Joseph on YouTube
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Get new PCB videos as they drop. Tutorials, walkthroughs, and practical builds.
                </p>
              </div>

              {/* YouTube Subscribe Button */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.youtube.com/@josephogbonna860"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8"
                  >
                    <path d="M23.498 6.186a2.974 2.974 0 0 0-2.093-2.106C19.383 3.5 12 3.5 12 3.5s-7.383 0-9.405.58a2.974 2.974 0 0 0-2.093 2.106C0 8.21 0 12 0 12s0 3.79.502 5.814a2.974 2.974 0 0 0 2.093 2.106C4.617 20.5 12 20.5 12 20.5s7.383 0 9.405-.58a2.974 2.974 0 0 0 2.093-2.106C24 15.79 24 12 24 12s0-3.79-.502-5.814zM9.75 15.02v-6.04L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@josephogbonna860/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-full bg-red-600 text-white font-semibold hover:opacity-90"
                >
                  View All Videos
                </a>
              </div>
            </div>
          </div>
          
          {/* Back to Videos */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/resources/videos" 
              className="inline-flex items-center text-[var(--color-primary)] hover:underline"
            >
              ← Back to Videos
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideoPage;