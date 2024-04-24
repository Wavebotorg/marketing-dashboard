import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";

import { headers } from "next/headers";

import { cookieToInitialState } from "wagmi";

import { config } from "../config";
import Web3ModalProvider from "@/context";

// import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });
import { SearchProvider } from "././components/contexts/SearchContext";
export const metadata = {
  title: "wave",
  description: "wave app",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider initialState={initialState}>
          <SearchProvider>
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
          </SearchProvider>
          </Web3ModalProvider>
      </body>
    </html>
  );
}
