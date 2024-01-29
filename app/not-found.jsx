import Link from "next/link";
import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export const metadata = {
  title: "Error 404",
  description: "Project not found",
};

const PageNotFound = () => {
  return (
    <div className="min-h-[calc(100vh-102px)] h-full flex flex-col justify-center items-center gap-5 p-8 md:p-16 animate__animated animate__fadeIn">
      <div className="glass p-8 !rounded-full">
        <FaExclamationTriangle className="text-7xl" />
      </div>
      <p className="font-bold text-4xl lg:text-5xl xl:text-6xl text-primary">
        Error 404
      </p>

      <p className="font-semibold text-xl lg:text-2xl xl:text-3xl">
        Page not found
      </p>
      <Link href="/">
        <button className="project-button">Back to Home</button>
      </Link>
    </div>
  );
};

export default PageNotFound;
