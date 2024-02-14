import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Sidebar from "./components/Sidebar";
import Loginbutton from "./components/Loginbutton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <div className="mx-auto">
            <div className="fixed flex  w-full h-full">
              <div className="w-[20%] h-full ">
                <Sidebar />
              </div>
              <div className="w-full  bg-[#0B0E10] p-5 overflow-auto h-screen ">
                <div>
                  <Loginbutton />
                </div>
                <div>{children}</div>
              </div>
            </div>
          </div>
        </>
      </body>
    </html>
  );
}
