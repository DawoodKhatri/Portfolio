import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import HeroTagLines from "./heroTaglines";

const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-102px)] p-8 md:p-16 gap-8 flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="md:flex-[3] animate__animated animate__fadeInLeft">
        <p className="font-semibold text-lg lg:text-xl xl:text-2xl">Hello, It&apos;s Me</p>
        <p className="font-bold text-4xl lg:text-5xl xl:text-6xl my-1">Dawood Khatri</p>
        <p className="font-semibold text-xl lg:text-2xl xl:text-3xl">
          <HeroTagLines />
        </p>
        <p className="text-sm lg:text-base xl:text-lg my-2">
          I bring a creative approach to seamlessly blend front-end and back-end
          technologies. Let&apos;s connect and explore the possibilities of creating
          innovative digital experiences together.
        </p>
        <div className="my-5 flex items-center gap-8">
          <Link
            href="https://wa.me/+918169008712"
            target="_blank"
            className="hero-links"
          >
            <FaWhatsapp className="text-xl lg:text-2xl xl:text-3xl text-white" />
          </Link>
          <Link
            href="https://linkedin.com/in/DawoodKhatri"
            target="_blank"
            className="hero-links"
          >
            <FaLinkedin className="text-xl lg:text-2xl xl:text-3xl text-white" />
          </Link>
          <Link
            href="https://github.com/DawoodKhatri"
            target="_blank"
            className="hero-links"
          >
            <FaGithub className="text-xl lg:text-2xl xl:text-3xl text-white" />
          </Link>
        </div>
        <Link href="/contact">
          <button className="hero-button">Lets Connect</button>
        </Link>
      </div>
      <div className="md:flex-[2] animate__animated animate__zoomIn">
        <div className="glass w-2/3 m-auto md:w-full aspect-square !rounded-full shadow shadow-primary overflow-hidden">
          <img className="mt-5 w-full h-full object-cover" src="picture.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

