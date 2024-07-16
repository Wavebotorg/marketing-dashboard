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
  title: "Wave Dashboard",
  description: "Optimize your portfolio, discover the hottest meme tokens, and mirror the strategies of top traders - all in one seamless experience designed for the meme coin enthusiast.",
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
            <div className="flex flex-col sm:flex-row  w-full ">
              <div className="sidebar visible ">
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
