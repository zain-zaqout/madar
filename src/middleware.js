import { NextResponse } from 'next/server';

export function middleware(request) {
  const isLoggedIn = request.cookies.get('isLoggedIn');
  const { pathname } = request.nextUrl;

  const authRoutes = ["/login", "/"];

  const protectedRoutes = [
    "/dashboard",
    "/new-shipment",
    "/offer",
    "/profile",
    "/support/chat",
    "/support"
  ];

  if (isLoggedIn && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  
  if (!isLoggedIn && isProtectedRoute) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};