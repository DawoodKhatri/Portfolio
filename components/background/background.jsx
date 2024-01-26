"use client";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import WeatherScene from "./weatherScene";

const AppBackground = () => {
  return (
    <div className="w-full h-screen fixed -z-50">
      <Canvas className="g-[#0c140f] !bg-zinc-900">
        <WeatherScene />
      </Canvas>
    </div>
  );
};

export default AppBackground;
