# Database Connection Error Fix

## 🚨 Error: `connect ECONNREFUSED`

This error means your app can't connect to Supabase. Here's how to fix it:

## 🔍 **Step 1: Check Supabase Project Status**

1. Go to [supabase.com](https://supabase.com) and log in
2. Check if your project is **active** (not paused)
3. If paused, click "Resume" to restart it
4. Wait 2-3 minutes for the database to fully start

## 🔧 **Step 2: Verify Environment Variables**

Make sure your `.env.local` file has the correct values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Important:** 
- URL should start with `https://`
- Keys should be long JWT tokens
- No extra spaces or quotes

## 🗄️ **Step 3: Check Database Schema**

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run this to check if tables exist:

```sql
SELECT table_name FROM information_schema.tables 
WHERE table_schema = 'public';
```

If no tables exist, run the schema from `scripts/database-schema.sql`

## 🔄 **Step 4: Test Connection**

Create a simple test file to verify connection:

```javascript
// test-connection.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    const { data, error } = await supabase.from('blog_posts').select('count');
    console.log('✅ Connection successful:', data);
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  }
}

testConnection();
```

## 🛠️ **Step 5: Common Solutions**

### **Solution A: Restart Everything**
```bash
# Stop dev server
Ctrl+C

# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

### **Solution B: Check Network**
- Try from different network (mobile hotspot)
- Disable VPN if using one
- Check if your firewall blocks the connection

### **Solution C: Create New Supabase Project**
If the project is corrupted:
1. Create a new Supabase project
2. Update `.env.local` with new credentials
3. Run the database schema
4. Seed with sample data

## 🚨 **Emergency Fallback**

If Supabase keeps failing, you can run the app in "offline mode":

1. The app will show configuration warnings
2. All API calls return empty arrays
3. You can still test the UI
4. No real-time features until connection is fixed

## 📞 **Still Having Issues?**

1. **Check Supabase Status**: [status.supabase.com](https://status.supabase.com)
2. **Supabase Discord**: Get help from the community
3. **Project Logs**: Check Supabase project logs for errors

---

**Most Common Fix**: Restart your Supabase project and wait 2-3 minutes! 🔄
