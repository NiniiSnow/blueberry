import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const defaultLocale = 'en';
const locales = ['en', 'ge', 'ru'];

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api')) {
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept-Language');
    return response;
  }

  if (request.nextUrl.pathname === '/') {
    const locale = request.headers.get('accept-language')?.split(',')[0].split('-')[0] || defaultLocale;
    const validLocale = locales.includes(locale) ? locale : defaultLocale;
    return NextResponse.redirect(new URL(`/${validLocale}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/',
  ],
};
