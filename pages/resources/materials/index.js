import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { supabase } from "../../../lib/supabase";

const MaterialsPage = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMaterials();
    
    // Set up real-time subscription
    const subscription = supabase
      .channel('materials-changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'materials' 
        }, 
        (payload) => {
          console.log('Material change received!', payload);
          loadMaterials(); // Reload materials when changes occur
        })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadMaterials = async () => {
    try {
      const { data, error } = await supabase
        .from('materials')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setMaterials(data || []);
    } catch (error) {
      console.error('Error loading materials:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full flex flex-col justify-start items-center overflow-hidden">
{/* Hero Section */}
<div className="w-full h-[600px] relative overflow-hidden flex items-center justify-center">
  <Image
    src="/material-bg.jpg"
    alt="Materials Hero"
    width={1440}
    height={600}
    className="w-full h-full object-cover absolute top-0 left-0"
    priority
  />
  <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-black/70 to-transparent flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="px-4 flex flex-col items-center text-center"
    >
      <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        Resource Materials
      </h1>
      <p className="mt-4 text-white text-base sm:text-lg font-normal max-w-[600px]">
        Access downloadable resources to support your learning and
        projects in electronics engineering.
      </p>
    </motion.div>
  </div>
</div>


        {/* Materials Content Section */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 flex flex-col justify-start items-center gap-12 sm:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-start items-center gap-5 sm:gap-6"
          >
            <h2 className="w-full text-center text-[var(--color-primary)] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[70.40px]">
              Downloadable Resources
            </h2>
            <p className="w-full text-center text-[var(--color-foreground)] text-base sm:text-lg font-normal leading-normal">
              Find essential guides, templates, and tools to accelerate your
              electronics engineering projects.
            </p>
          </motion.div>

          {loading ? (
            <div className="w-full flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--color-primary)]"></div>
            </div>
          ) : (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {materials.map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group w-full p-5 bg-[#f0f0f0] rounded-[13px] flex flex-col justify-start items-center gap-4 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Image with hover swap */}
                <div className="relative w-[150px] h-[150px]">
                  {/* Default Image */}
                  <Image
                    src={material.image_url || "/material1.png"}
                    alt={`${material.title} Cover`}
                    fill
                    className="rounded-md object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  {/* Hover Preview Image */}
                  <Image
                    src={material.preview_url || material.image_url || "/preview1.jpg"}
                    alt={`${material.title} Preview`}
                    fill
                    className="rounded-md object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Title + Description */}
                <h3 className="w-full text-center text-[var(--color-foreground)] text-lg sm:text-xl font-bold leading-relaxed">
                  {material.title}
                </h3>
                <p className="w-full text-center text-[var(--color-text-secondary)] text-sm sm:text-base font-normal leading-tight">
                  {material.description}
                </p>

                {/* Download Button */}
                <a
                  href={`/resources/materials/${material.id}`}
                  className="w-full inline-flex justify-center items-center px-4 py-2 bg-[var(--color-primary)] text-white text-sm sm:text-base font-medium rounded-[10px] hover:bg-[var(--color-primary-dark)] transition-colors"
                >
                  View {material.type}
                </a>
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

export default MaterialsPage;
