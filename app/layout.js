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
        <>
          {/* <div className="mx-auto">
            <div className="fixed flex  w-full ">
              <div className=" h-full ">
                <Sidebar />
              </div>
              <div className="w-full  bg-[#0B0E10] p-5 overflow-auto h-screen ">
                <div className=" ">
                  <Loginbutton />
                </div>
                <div className="">{children}</div>
              </div>
            </div>
          </div> */}
          <div className="fixed top-0 w-full z-20"><Navbar /></div>
          <div className="">
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 w-full">
              <div className="sidebar  px-5 overflow-hidden z-30 ">
              <Sidebar />
              </div>
              <div className="flex-grow w-full container mx-96">{children}</div>
            </div>
          </div>
        </>
      </body>
    </html>
  );
}
