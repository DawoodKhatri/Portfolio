import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AppBackground from "@/components/background/background";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dawood Khatri",
  description: "Full Stack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <AppBackground />
        <Navbar />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
