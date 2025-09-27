import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { supabase } from '../../../lib/supabase';
import { materialsAPI } from '../../../lib/adminAPI';

const MaterialPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      loadMaterial();
    }
  }, [id]);

  const loadMaterial = async () => {
    try {
      const { data, error } = await supabase
        .from('materials')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .single();

      if (error) throw error;
      setMaterial(data);
      
      // Increment download count
      if (data) {
        await materialsAPI.update(data.id, { downloads: data.downloads + 1 });
      }
    } catch (error) {
      console.error('Error loading material:', error);
      setError('Material not found');
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

  if (error || !material) {
    return (
      <div className="w-full min-h-screen flex flex-col">
        <Navbar />
        <main className="w-full flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Material Not Found</h1>
            <p className="text-gray-600 mb-6">The material you're looking for doesn't exist.</p>
            <a href="/resources/materials" className="text-[var(--color-primary)] hover:underline">
              ← Back to Materials
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
            src={material.image_url || "/material1.png"}
            alt={material.title}
            fill
            className="w-full h-full object-cover"
            priority
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                {material.title}
              </h1>
              <p className="mt-4 text-white text-lg max-w-2xl">
                {material.description}
              </p>
              <div className="mt-6 flex items-center space-x-4 text-white text-sm">
                <span className="px-2 py-1 bg-white/20 rounded">
                  {material.type}
                </span>
                <span>{material.downloads} downloads</span>
                <span>•</span>
                <span>{new Date(material.created_at).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Download {material.title}</h2>
              <p className="text-gray-600 mb-6">{material.description}</p>
              
              {/* Download Button */}
              <a
                href={material.file_url || "#"}
                className="inline-flex items-center px-8 py-4 bg-[var(--color-primary)] text-white text-lg font-semibold rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                download
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download {material.type}
              </a>
            </div>

            {/* Material Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">File Type</h3>
                <p className="text-gray-600">{material.type}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Downloads</h3>
                <p className="text-gray-600">{material.downloads}</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Upload Date</h3>
                <p className="text-gray-600">{new Date(material.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
          
          {/* Back to Materials */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a 
              href="/resources/materials" 
              className="inline-flex items-center text-[var(--color-primary)] hover:underline"
            >
              ← Back to Materials
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MaterialPage;