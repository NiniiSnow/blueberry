import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware() {
  const response = NextResponse.next();

  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Accept-Language');

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
