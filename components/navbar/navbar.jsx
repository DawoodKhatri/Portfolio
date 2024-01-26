"use client";

import { NAVBAR_ITEMS } from "@/constants/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-glass flex justify-between items-center py-3 px-20">
      <h3 className="text-4xl font-semibold">
        <div className="glass h-[56px] !rounded-full overflow-hidden">
          <img className="mt-1 w-full h-full object-cover" src="picture.png" />
        </div>
        {/* {NAVBAR_ITEMS.find(({ href }) => pathname === href).title} */}
      </h3>
      <div className="flex gap-5 text-lg font-semibold">
        {NAVBAR_ITEMS.map(({ label, href }, index) => (
          <Link
            key={index}
            href={href}
            className={`${
              href === pathname ? "text-primary " : ""
            }hover:underline underline-offset-2 decoration-primary transition-all ease-in-out duration-300`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
