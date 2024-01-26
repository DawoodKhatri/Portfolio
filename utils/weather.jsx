import * as THREE from "three";

export const getRainGeometry = (rainCount = 15000) => {
  const positions = [];
  const sizes = [];

  const rainGeometry = new THREE.BufferGeometry();

  for (let i = 0; i < rainCount; i++) {
    positions.push(Math.random() * 400 - 200);
    positions.push(Math.random() * 500 - 250);
    positions.push(Math.random() * 400 - 200);
    sizes.push(30);
  }

  rainGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(positions), 3)
  );
  rainGeometry.setAttribute(
    "size",
    new THREE.BufferAttribute(new Float32Array(sizes), 1)
  );

  return rainGeometry;
};

export const getRainMaterial = () => {
  return new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.1,
    transparent: true,
  });
};

export const animateRain = (rainRef) => {
  rainRef.current.geometry.attributes.size.array.forEach((r, i) => {
    r += 0.3;
  });
  rainRef.current.geometry.attributes.size.needsUpdate = true;

  rainRef.current.position.z -= 0.222;
  if (rainRef.current.position.z < -200) {
    rainRef.current.position.z = 0;
  }
};

export const getCloudParticles = (cloudTexture) => {
  const cloudGeo = new THREE.PlaneGeometry(500, 500);
  const cloudMaterial = new THREE.MeshLambertMaterial({
    map: cloudTexture,
    transparent: true,
  });

  const cloudParticles = [];

  for (let p = 0; p < 20; p++) {
    const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
    cloud.position.set(
      Math.random() * 800 - 400,
      500,
      Math.random() * 500 - 450
    );
    cloud.rotation.x = 1.16;
    cloud.rotation.y = -0.12;
    cloud.rotation.z = Math.random() * 360;
    cloud.material.opacity = 0.4;
    cloudParticles.push(cloud);
  }

  return cloudParticles;
};

export const getAnimatedCloudParticles = (cloudParticles) => {
  return cloudParticles.map((cloud) => {
    cloud.rotation.z -= 0.001;
    return cloud;
  });
};

export const getRandomFlash = ({ power, position }) => {
  if (Math.random() > 0.93 || power > 1000000) {
    if (power < 1000000)
      position = [Math.random() * 600, 200 + Math.random() * 500, 100];
    power = 500000 + Math.random() * 5000000;
  }
  return { power, position };
};

export const setCameraConfig = (camera) => {
  camera.near = 1;
  camera.far = 1000;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.setFocalLength(15);
  camera.position.setZ(1);
  camera.rotation.set(1.16, -0.12, 0.27);
};
