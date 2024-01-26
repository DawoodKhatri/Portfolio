"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroTagLines = () => {
  return (
    <>
      I&apos;m a{" "}
      <span className="text-primary">
        <Typewriter
          words={[
            "Full Stact Web Developer",
            "Tech Enthusiast",
            "Passionate Coder",
            "Web Development Enthusiast",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </>
  );
};

export default HeroTagLines;
