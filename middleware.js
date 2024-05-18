

// import { NextResponse } from 'next/server'
// import Cookies from 'js-cookie';

// export function middleware(request) {
//     const isLoggedIn = !!Cookies.get('Token'); // Assuming you have a cookie named 'authToken' to check if the user is logged in

//     if (!isLoggedIn) {
//         // Redirect to the login page if the user is not logged in
//         return NextResponse.redirect(new URL('/login', request.url))
//     }

//     // Continue with the request if the user is logged in
//     return NextResponse.next()
// }

// export const config = {
//     matcher: ['/resetpassword/:path*', '/forgotpassword/:path*']
// }



import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';

export function middleware(request) {
    const isLoggedIn = !!Cookies.get('Token');

    // Extract the path from the request URL
    const { pathname } = new URL(request.url);

    // Define an array of paths that require authentication
    const authenticatedPaths = ['/resetpassword', '/forgotpassword'];

    // Check if the current path requires authentication and the user is not logged in
    if (authenticatedPaths.includes(pathname) && !isLoggedIn) {
        // Redirect to the login page if the user is not logged in
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Continue with the request if the user is logged in or the path does not require authentication
    return NextResponse.next();
}

export const config = {
    // Match all paths under /resetpassword and /forgotpassword
    matcher: ['/resetpassword/:path*', '/forgotpassword/:path*','/:path*']
};
