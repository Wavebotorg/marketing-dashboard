import { NextServer } from "next/dist/server/next";
import { NextResponse } from "next/server";
export function middleware(request) {
  console.log("middlware");
  if (request.nextUrl.pathname != "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/portfolio/:path*"],
};
// nexturl mokle aema login thi equal na hoi to j login par redirct karvanu
