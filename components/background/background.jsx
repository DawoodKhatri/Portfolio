"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import WeatherScene from "./weatherScene";

const AppBackground = () => {
  return (
    <div className="w-full h-screen fixed -z-50 bg-[linear-gradient(to_right,rgba(0,0,0,0.25),rgba(0,0,0,0.75)),url('/background.jpg')] bg-no-repeat bg-cover bg-center">
      <Canvas>
        <WeatherScene />
      </Canvas>
    </div>
  );
};

export default AppBackground;
