import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "wave",
  description: "wave app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Web3AuthSignerProvider> */}

        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-5 w-full ">
          <div className="sidebar visible px-5  ">
            <Sidebar />
          </div>
          {/* <div className="fixed top-0 w-full z-50"><Navbar /></div> */}

          <div className=" flex-grow w-full 2xl:pl-52 xl:pl-60 md:pl-4 sm:pl-4 xsm:pl-12 mx-auto mt-24">
            <div className=" sticky top-0 z-[50] bg-black w-full">
              {" "}
              <Navbar />
            </div>
            {children}
          </div>
        </div>

        {/* </Web3AuthSignerProvider> */}
      </body>
    </html>
  );
}
