import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const response = NextResponse.next();

  response.cookies.set("sessionId", "foo", {
    path: "/",
    httpOnly: true,
    secure: true,
    maxAge: 3600,
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
