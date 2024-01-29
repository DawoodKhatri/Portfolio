"use client";
import { NAVBAR_ITEMS } from "@/constants/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full py-5 px-5 sm:px-20 fixed top-0 z-50">
      <div className="glass shadow-md shadow-primary w-fit m-auto flex gap-5 sm:gap-8 text-lg font-semibold px-8 py-4">
        {NAVBAR_ITEMS.map(({ icon, label, href }, index) => (
          <Link
            key={index}
            href={href}
            className={`${
              href === pathname ? "text-primary " : ""
            }hover:underline underline-offset-2 decoration-primary transition-all ease-in-out duration-300`}
          >
            <button className="flex items-center gap-2">
              {icon} <span className="hidden md:block"> {label}</span>
            </button>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
