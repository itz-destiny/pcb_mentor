# Fix "Error Saving" and Make Everything Real

## 🚨 **Problem**: "Error saving blog/video/material"

This happens when there are issues with database permissions or configuration. Here's how to fix it:

## 🔧 **Step 1: Clear Demo Data**

First, let's start fresh with a clean database:

```bash
npm run clear-demo
```

This will remove all existing demo data and give you a clean slate.

## 🔧 **Step 2: Check Database Policies**

The error might be due to Row Level Security (RLS) policies. Run this in your Supabase SQL Editor:

```sql
-- Check if policies exist
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE schemaname = 'public';
```

If no policies exist, run the database schema again:

```sql
-- Copy and paste the entire contents of scripts/database-schema.sql
-- This will create all necessary policies
```

## 🔧 **Step 3: Test Database Connection**

```bash
npm run test-db
```

Should show:
```
✅ Database connection successful!
✅ Real-time test completed
🎉 All tests passed!
```

## 🔧 **Step 4: Check Environment Variables**

Make sure your `.env.local` has:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIs...
```

## 🔧 **Step 5: Create Admin User**

You need an admin user to bypass RLS policies:

1. Go to Supabase Authentication > Users
2. Create a new user or note an existing user's UUID
3. Run this SQL (replace with actual UUID):

```sql
INSERT INTO admin_users (user_id, email, name, role, is_active)
VALUES ('your-user-uuid-here', 'admin@example.com', 'Admin User', 'admin', true);
```

## 🔧 **Step 6: Test Admin Interface**

1. Go to `/admin`
2. Try creating a blog post
3. Check browser console for specific error messages
4. The error message should now be more specific

## 🎯 **Make Everything Real**

### **What This Achieves:**

✅ **No Demo Data** - Clean database with only your content  
✅ **Real Admin Control** - Everything on main site comes from admin  
✅ **Real-time Updates** - Changes appear instantly  
✅ **Proper Error Handling** - Clear error messages  

### **Workflow:**

1. **Admin adds content** → `/admin`
2. **Content appears instantly** → Main site updates automatically
3. **Everything is real** → No fake/demo data

## 🚨 **Common Error Solutions**

### **"Permission denied"**
- Check RLS policies are created
- Ensure admin user exists
- Verify service role key is correct

### **"Duplicate key"**
- Try different title/slug
- Check for existing content

### **"Supabase not configured"**
- Check environment variables
- Restart dev server

### **"Relation does not exist"**
- Run database schema
- Check table names

## 🎉 **Success Indicators**

When everything works:
- ✅ Admin can create/edit/delete content
- ✅ Content appears on main site immediately
- ✅ No error messages
- ✅ Real-time updates work
- ✅ Only your content shows (no demo data)

---

**Your PCB Mentor site will now be 100% real with full admin control!** 🚀
