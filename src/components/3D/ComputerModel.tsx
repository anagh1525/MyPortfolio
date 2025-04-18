import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

const DevSetupModel = () => {
  const gltf = useGLTF("/computer.glb"); // Path relative to public folder

  return <primitive object={gltf.scene} scale={0.4} />;
};

const ComputerModel: React.FC = () => {
  return (
    <Canvas shadows className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 5, 3]} intensity={1} castShadow />
      <PerspectiveCamera makeDefault position={[0, 1, 4]} />
      <Suspense fallback={null}>
        <DevSetupModel />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default ComputerModel;
