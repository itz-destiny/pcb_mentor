# PCB Mentor - Real-time Admin Dashboard

A comprehensive Next.js application with real-time admin dashboard for managing blog posts, materials, and videos. Everything is connected to Supabase for real-time updates and data persistence.

## 🚀 Features

- **Real-time Updates**: All changes in admin dashboard reflect immediately on the main website
- **Admin Dashboard**: Complete CRUD operations for blog posts, materials, and videos
- **File Upload**: Support for images and documents with Supabase Storage
- **Authentication**: Secure admin authentication system
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Subscriptions**: Live updates using Supabase real-time features

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Git

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd pcb_mentor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and keys
3. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4. Set up Database Schema

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `scripts/database-schema.sql`
4. Run the SQL script to create all tables, policies, and functions

### 5. Seed the Database

Run the seed script to populate your database with sample data:

```bash
npm run seed
```

This will create:
- 5 sample blog posts
- 5 sample materials
- 5 sample videos

### 6. Set up Admin User

1. Go to Supabase Authentication > Users
2. Create a new user or use an existing one
3. Note the user's UUID
4. Go to SQL Editor and run:

```sql
INSERT INTO admin_users (user_id, email, name, role, is_active)
VALUES ('your-user-uuid', 'admin@example.com', 'Admin User', 'admin', true);
```

### 7. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your application.

## 📁 Project Structure

```
pcb_mentor/
├── pages/
│   ├── admin/                 # Admin dashboard pages
│   │   ├── blog/             # Blog management
│   │   ├── materials/        # Materials management
│   │   └── videos/           # Videos management
│   ├── resources/            # Public resource pages
│   │   ├── blog/             # Blog listing and individual posts
│   │   ├── materials/        # Materials listing
│   │   └── videos/           # Videos listing
│   └── components/           # Reusable components
├── lib/
│   ├── supabase.js          # Supabase client configuration
│   └── adminAPI.js          # API functions for CRUD operations
├── scripts/
│   ├── database-schema.sql   # Database schema
│   └── seed-database.js      # Database seeding script
└── public/                   # Static assets
```

## 🔧 Admin Dashboard Features

### Blog Management
- Create, edit, delete blog posts
- Upload featured images
- Publish/unpublish posts
- Real-time updates
- View count tracking

### Materials Management
- Upload PDFs, ZIPs, and other documents
- Add cover images and preview images
- Track download counts
- File management with Supabase Storage

### Videos Management
- Add YouTube videos by URL or ID
- Automatic thumbnail generation
- Category management
- View count tracking

## 🔄 Real-time Features

The application uses Supabase real-time subscriptions to ensure:

1. **Admin Changes**: When you create/edit/delete content in admin dashboard, it immediately reflects on the main website
2. **Live Updates**: Multiple admin users can work simultaneously with live updates
3. **Automatic Refresh**: No need to manually refresh pages to see changes

## 🗄️ Database Schema

### Tables Created:
- `blog_posts` - Blog post content and metadata
- `materials` - Learning materials and files
- `videos` - Video content and metadata
- `admin_users` - Admin user management
- `file_uploads` - File upload tracking

### Key Features:
- Row Level Security (RLS) enabled
- Automatic timestamps
- View count tracking
- File upload logging
- Admin permission system

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production:
```env
NEXT_PUBLIC_SUPABASE_URL=your_production_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_role_key
```

## 🔐 Security Features

- Row Level Security (RLS) on all tables
- Admin-only access to management functions
- Secure file upload with validation
- Authentication required for admin operations

## 📱 Usage

### For Admins:
1. Visit `/admin/login` to authenticate
2. Navigate to `/admin/blog`, `/admin/materials`, or `/admin/videos`
3. Create, edit, or delete content
4. Changes appear immediately on the main website

### For Users:
1. Visit `/resources/blog` for blog posts
2. Visit `/resources/materials` for downloadable resources
3. Visit `/resources/videos` for video tutorials
4. All content updates automatically

## 🛠️ Customization

### Adding New Content Types:
1. Create new table in Supabase
2. Add API functions in `lib/adminAPI.js`
3. Create admin page in `pages/admin/`
4. Create public page in `pages/resources/`
5. Add real-time subscriptions

### Styling:
- Uses Tailwind CSS for styling
- Custom CSS variables in `styles/globals.css`
- Responsive design patterns
- Dark/light mode support

## 🐛 Troubleshooting

### Common Issues:

1. **Database Connection Error**: Check your Supabase URL and keys
2. **Permission Denied**: Ensure RLS policies are set up correctly
3. **File Upload Issues**: Check Supabase Storage bucket permissions
4. **Real-time Not Working**: Verify Supabase real-time is enabled

### Debug Mode:
Add this to your `.env.local` for detailed logging:
```env
NEXT_PUBLIC_DEBUG=true
```

## 📞 Support

For issues and questions:
1. Check the Supabase documentation
2. Review the Next.js documentation
3. Check the project's GitHub issues

## 🎯 Next Steps

- Add user authentication for public users
- Implement comments system
- Add search functionality
- Create email notifications
- Add analytics dashboard
- Implement content scheduling

---

**Happy Coding! 🚀**
