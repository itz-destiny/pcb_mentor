# Quick Setup Guide

## 🚀 Fix the Runtime Error

The error you're seeing is because Supabase is not configured. Here's how to fix it:

### 1. Create Environment File

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

### 2. Get Supabase Credentials

1. Go to [supabase.com](https://supabase.com)
2. Create a new project or use existing one
3. Go to Settings > API
4. Copy your Project URL and API keys

### 3. Run Database Setup

1. Go to SQL Editor in Supabase dashboard
2. Copy and paste the contents of `scripts/database-schema.sql`
3. Run the SQL script

### 4. Seed Database (Optional)

```bash
npm run seed
```

### 5. Restart Development Server

```bash
npm run dev
```

## ✅ What's Fixed

- **Runtime Error**: Added proper error handling for missing Supabase config
- **Real-time Subscriptions**: Only enabled when Supabase is properly configured
- **Graceful Degradation**: App works even without Supabase (shows warning)
- **Better Error Messages**: Clear instructions for setup

## 🎯 Current Status

The admin interface will now:
- Show a warning if Supabase is not configured
- Work without crashing (returns empty arrays)
- Provide clear setup instructions
- Enable real-time features once configured

## 🔧 Alternative: Use Without Supabase

If you want to test the interface without Supabase:
1. The app will show a configuration warning
2. All API calls will return empty arrays
3. You can still see the UI and test the interface
4. No real-time features will work until Supabase is configured

---

**The runtime error is now fixed!** 🎉
