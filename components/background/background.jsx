"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import WeatherScene from "./weatherScene";

const AppBackground = () => {
  return (
    <div className="w-full h-screen fixed -z-50 bg-zinc-900">
      <Canvas>
        <WeatherScene />
      </Canvas>
    </div>
  );
};

export default AppBackground;
