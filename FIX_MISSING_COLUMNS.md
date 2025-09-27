# Fix "Could not find the 'image' column" Error

## 🚨 **Problem**: Missing Database Columns

The error "Could not find the 'image' column" means your database tables are missing required columns. This happens when the schema wasn't run completely or there was an error during setup.

## 🔧 **Quick Fix**

### **Step 1: Run Migration Script**

1. Go to your Supabase SQL Editor
2. Copy and paste the contents of `scripts/fix-missing-columns.sql`
3. Run the script
4. It will add all missing columns safely

### **Step 2: Verify Columns Exist**

After running the migration, verify with this query:

```sql
SELECT 
    table_name,
    column_name,
    data_type
FROM information_schema.columns 
WHERE table_schema = 'public' 
    AND table_name IN ('blog_posts', 'materials', 'videos')
ORDER BY table_name, column_name;
```

You should see columns like:
- `blog_posts`: image, excerpt, featured, tags, views, publish_date
- `materials`: file_url, file_name, file_size, image_url, preview_url, downloads
- `videos`: thumbnail, category, views, duration

### **Step 3: Test Admin Interface**

1. Go to `/admin`
2. Try creating a blog post
3. Should work without column errors now

## 🎯 **What the Migration Does**

✅ **Adds missing columns** to all tables  
✅ **Safe to run multiple times** - won't duplicate columns  
✅ **Preserves existing data** - only adds what's missing  
✅ **Sets proper defaults** - ensures data integrity  

## 🚨 **If Migration Fails**

If you get errors running the migration:

1. **Check table existence:**
   ```sql
   SELECT table_name FROM information_schema.tables 
   WHERE table_schema = 'public';
   ```

2. **If tables don't exist, run the full schema:**
   - Copy `scripts/database-schema.sql`
   - Run in Supabase SQL Editor

3. **If you get permission errors:**
   - Make sure you're using the SQL Editor (not a restricted interface)
   - Check if your Supabase project is active

## 🎉 **Success Indicators**

When fixed, you should see:
- ✅ No "column not found" errors
- ✅ Admin can create/edit content
- ✅ All form fields work properly
- ✅ Content saves successfully

---

**Run the migration script and your admin interface will work perfectly!** 🚀
