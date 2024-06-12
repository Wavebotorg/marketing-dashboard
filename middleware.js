// import { NextServer } from "next/dist/server/next"
// import { NextResponse } from "next/server"
// export function middleware(request){
//     console.log("middlware")
//     if(request.nextUrl.pathname!="/login"){
//         return NextResponse.redirect(new URL("/login",request.url))
//     }

// }
// export const config ={
//     matcher :["/portfolio/:path*"]
// }
// // nexturl mokle aema login thi equal na hoi to j login par redirct karvanu

import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  console.log("🚀 ~ middleware ~ path:", path);
  const isPublicPath = path === "/login" || path === "/signup";
  const token = request.cookies.get("auth-token");

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: ["/login", "/",],
};
