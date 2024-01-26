import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import {
  animateRain,
  getAnimatedCloudParticles,
  getCloudParticles,
  getRainGeometry,
  getRainMaterial,
  getRandomFlash,
  setCameraConfig,
} from "@/utils/weather";

function Rain() {
  const rainRef = useRef();

  useFrame(() => {
    animateRain(rainRef);
  });

  return (
    <points
      ref={rainRef}
      geometry={getRainGeometry()}
      material={getRainMaterial()}
    />
  );
}

function Clouds() {
  const cloudTexture = useTexture(
    "https://static.vecteezy.com/system/resources/previews/010/884/548/original/dense-fluffy-puffs-of-white-smoke-and-fog-on-transparent-background-abstract-smoke-clouds-movement-blurred-out-of-focus-smoking-blows-from-machine-dry-ice-fly-fluttering-in-air-effect-texture-png.png"
  );

  const [cloudParticles, setCloudParticles] = useState(
    getCloudParticles(cloudTexture)
  );

  useFrame(() => {
    setCloudParticles(getAnimatedCloudParticles(cloudParticles));
  });

  return (
    <>
      {cloudParticles.map((cloud, i) => (
        <mesh key={cloud.rotation.z} {...cloud} />
      ))}
    </>
  );
}

function Flash() {
  const [flash, setFlash] = useState({ power: 0, position: [200, 300, 100] });

  useFrame((state, delta) => {
    setFlash(getRandomFlash(flash));
  });

  return (
    <pointLight
      color={0x22c55e}
      intensity={10}
      distance={500}
      decay={1.7}
      power={flash.power}
      position={flash.position}
    />
  );
}

const WeatherScene = () => {
  useFrame(({ camera }) => {
    setCameraConfig(camera);
  });
  return (
    <>
      <ambientLight color={0x555555} />
      <directionalLight color={0xffffff} position={[0, 0, 1]} />
      {/* <fogExp2 color={0x11111f} density={0.002} /> */}
      <Flash />
      <Clouds />
      <Rain />
    </>
  );
};

export default WeatherScene;
