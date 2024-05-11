import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";

import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

// import { config } from "../config";
// import Web3ModalProvider from "@/context";

// import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });
import { SearchProvider } from "././components/contexts/SearchContext";
import { WalletProvider } from "./components/contexts/WalletContext";

export const metadata = {

  title:"Wave Dashboard",
  description:
  "wave app",
  icons: {
    icon: "/wave_logo.png",
    shortcut: "/wave_logo.png",
    apple: "/wave_logo.png",
    other: {
      rel: "tanthetaa-touch-icon-precomposed",
      url: "/wave_logo.png",
    },
  },
};

export default function RootLayout({ children }) {
  // const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Web3ModalProvider initialState={initialState}> */}
          <SearchProvider>
          <WalletProvider>
            <div className="flex flex-col sm:flex-row  sm:space-x-5 w-full ">
              <div className="sidebar visible px-5  ">
                <Sidebar />
              </div>
              {/* <div className="fixed top-0 w-full z-50"><Navbar /></div> */}

              <div className=" flex-grow w-full ">
                <div className=" sticky top-0 z-[50] bg-black w-full">
                  {" "}
                  <Navbar />
                </div>
                <div>{children}</div>
              </div>
            </div>
            </WalletProvider>
          </SearchProvider>
      
          {/* </Web3ModalProvider> */}
      </body>
    </html>
  );
}

// "use client"
// import { Inter } from "next/font/google";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router'; // Import useRouter hook
// import Web3ModalProvider from "@/context";
// import { SearchProvider } from "././components/contexts/SearchContext";
// import LoginPage from '../app/(pages)/login/page'; // Import your login page component
// import HomePage from './page'; // Import your home page component

// // Initialize Inter font
// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }) {
//   const router = useRouter(); // Use useRouter hook to get the router object
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check authentication status on initial render
//   useEffect(() => {
//     const userIsLoggedIn = checkIfUserIsLoggedIn(); // Implement this function based on your authentication mechanism
//     setIsLoggedIn(userIsLoggedIn);
//   }, []);

//   const checkIfUserIsLoggedIn = () => {
//     return localStorage.getItem('authToken') !== null;
//   };

//   useEffect(() => {
//     if (!isLoggedIn && router.pathname !== '/login') {
//       router.push('/login');
//     }
//   }, [isLoggedIn, router]);

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Web3ModalProvider >
//           <SearchProvider>
//             {isLoggedIn ? (
//               <HomePage>
//                 {children}
//               </HomePage>
//             ) : (
//               <LoginPage />
//             )}
//           </SearchProvider>
//         </Web3ModalProvider>
//       </body>
//     </html>
//   );
// }
