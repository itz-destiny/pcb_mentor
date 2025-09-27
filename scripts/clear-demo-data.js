import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('Please check your .env.local file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function clearDemoData() {
  try {
    console.log('🧹 Clearing demo data...\n');

    // Clear all existing data
    console.log('📝 Clearing blog posts...');
    const { error: blogError } = await supabase
      .from('blog_posts')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    
    if (blogError) {
      console.error('Error clearing blog posts:', blogError.message);
    } else {
      console.log('✅ Blog posts cleared');
    }

    console.log('📁 Clearing materials...');
    const { error: materialsError } = await supabase
      .from('materials')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    
    if (materialsError) {
      console.error('Error clearing materials:', materialsError.message);
    } else {
      console.log('✅ Materials cleared');
    }

    console.log('🎥 Clearing videos...');
    const { error: videosError } = await supabase
      .from('videos')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all
    
    if (videosError) {
      console.error('Error clearing videos:', videosError.message);
    } else {
      console.log('✅ Videos cleared');
    }

    console.log('\n🎉 Demo data cleared successfully!');
    console.log('📊 Your database is now clean and ready for real content.');
    console.log('\n💡 Next steps:');
    console.log('1. Go to /admin to start adding real content');
    console.log('2. Everything you add will appear on the main site');
    console.log('3. No more demo/fake data!');

  } catch (error) {
    console.error('❌ Error clearing demo data:', error.message);
  }
}

clearDemoData();
