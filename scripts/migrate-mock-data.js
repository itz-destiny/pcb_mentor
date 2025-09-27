const { supabaseAdmin } = require('../lib/supabase');

// Mock data from your current implementation
const mockVideos = [
  {
    title: "Introduction to PCB Design for Beginners",
    description: "Get started with PCB design with this beginner-friendly tutorial. Covers basics, tools, and first steps.",
    videoId: "MsdJgEinb34",
    thumbnail: "https://img.youtube.com/vi/MsdJgEinb34/maxresdefault.jpg",
    category: "Tutorial",
    uploadDate: "2024-01-15",
    views: 1234,
    duration: "15:30",
    is_active: true
  },
  // Add your other mock videos here
];

async function migrateMockData() {
  try {
    // Clear existing data (optional)
    await supabaseAdmin
      .from('videos')
      .delete()
      .neq('id', 0); // Safety check

    // Insert mock videos
    const { data, error } = await supabaseAdmin
      .from('videos')
      .insert(mockVideos);

    if (error) throw error;
    console.log('Successfully migrated mock videos:', data);
  } catch (error) {
    console.error('Error migrating data:', error);
  }
}

migrateMockData();