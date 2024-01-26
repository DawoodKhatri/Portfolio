import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import HeroTagLines from "./heroTaglines";

const Hero = () => {
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex justify-center items-center">
      <div className="flex-[3] p-20">
        <p className="font-semibold text-2xl">Hello, It&apos;s Me</p>
        <p className="font-bold text-6xl my-1">Dawood Khatri</p>
        <p className="font-semibold text-3xl">
          <HeroTagLines />
        </p>
        <p className="text-lg my-2">
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
            <FaWhatsapp className="text-3xl text-white" />
          </Link>
          <Link
            href="https://linkedin.com/in/DawoodKhatri"
            target="_blank"
            className="hero-links"
          >
            <FaLinkedin className="text-3xl text-white" />
          </Link>
          <Link
            href="https://github.com/DawoodKhatri"
            target="_blank"
            className="hero-links"
          >
            <FaGithub className="text-3xl text-white" />
          </Link>
        </div>
        <Link href="/contact">
          <button className="hero-button">Lets Connect</button>
        </Link>
      </div>
      <div className="flex-[2] p-20">
        <div className="glass h-[480px] !rounded-full overflow-hidden">
          <img className="mt-5 w-full h-full object-cover" src="picture.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

