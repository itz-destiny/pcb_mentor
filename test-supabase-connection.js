// Database Connection Test Script
// Run this with: node test-supabase-connection.js

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('🔍 Testing Supabase Connection...\n');

// Check if environment variables are set
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing environment variables!');
  console.error('Please check your .env.local file');
  process.exit(1);
}

console.log('✅ Environment variables found');
console.log('URL:', supabaseUrl);
console.log('Key:', supabaseAnonKey.substring(0, 20) + '...');

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
  try {
    console.log('\n🔄 Testing database connection...');
    
    // Test basic connection
    const { data, error } = await supabase
      .from('blog_posts')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('❌ Database query failed:', error.message);
      
      if (error.message.includes('relation "blog_posts" does not exist')) {
        console.log('\n💡 Solution: Run the database schema from scripts/database-schema.sql');
      } else if (error.message.includes('permission denied')) {
        console.log('\n💡 Solution: Check your RLS policies or use service role key');
      }
      return;
    }
    
    console.log('✅ Database connection successful!');
    console.log('📊 Query result:', data);
    
    // Test real-time subscription
    console.log('\n🔄 Testing real-time subscription...');
    
    const subscription = supabase
      .channel('test-channel')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'blog_posts' 
        }, 
        (payload) => {
          console.log('✅ Real-time subscription working:', payload);
        })
      .subscribe();
    
    // Wait a bit then unsubscribe
    setTimeout(() => {
      subscription.unsubscribe();
      console.log('✅ Real-time test completed');
      console.log('\n🎉 All tests passed! Your Supabase setup is working correctly.');
    }, 2000);
    
  } catch (err) {
    console.error('❌ Connection test failed:', err.message);
    
    if (err.message.includes('ECONNREFUSED')) {
      console.log('\n💡 Solutions:');
      console.log('1. Check if your Supabase project is active (not paused)');
      console.log('2. Wait 2-3 minutes after resuming a paused project');
      console.log('3. Verify your project URL is correct');
      console.log('4. Try from a different network');
    } else if (err.message.includes('ENOTFOUND')) {
      console.log('\n💡 Solution: Check your Supabase URL - it should be: https://your-project-id.supabase.co');
    }
  }
}

testConnection();
