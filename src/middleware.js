import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get('isLoggedIn'); 
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/_next') || pathname.includes('.')) {
        return NextResponse.next();
    }

    const privatePaths = ['/dashboard', '/new-shipment', '/offer', '/profile', '/support', '/succss', '/subject_chat', '/support_chat'];
    const isPrivate = privatePaths.some(path => pathname.startsWith(path));

    if (!token && isPrivate) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    if (token && pathname === "/login") {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};