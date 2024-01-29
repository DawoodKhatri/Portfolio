import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AppBackground from "@/components/background/background";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "react-hot-toast";
import "animate.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dawood Khatri",
  description:
    "As a Full Stack Web Developer, Flutter Developer, Freelancer, and Student, I bring a creative approach to seamlessly blend front-end and back-end technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <AppBackground />
        <Navbar />
        <main className="max-w-screen-2xl mx-auto pt-[100px]">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
