import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect root path to "/en"
  if (pathname === "/") {
    console.log("Redirecting to /en");
    return NextResponse.redirect(new URL("/en", request.url));
  }

}
