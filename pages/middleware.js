import { NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const { data: { session } } = await supabase.auth.getSession();

  // Check if we're on an admin page that's not the login page
  if (req.nextUrl.pathname.startsWith('/admin') && !req.nextUrl.pathname.includes('/admin/login')) {
    if (!session) {
      // Redirect to login if there's no session
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }

    // If we have a session, check if the user is an admin
    const { data: adminData } = await supabase
      .from('admin_users')
      .select('*')
      .eq('user_id', session.user.id)
      .eq('is_active', true)
      .single();

    if (!adminData) {
      // Redirect to login if user is not an admin
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: '/admin/:path*'
};