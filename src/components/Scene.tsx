import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls, Environment } from '@react-three/drei';

type SceneProps = {
  children: React.ReactNode;
  showStats?: boolean;
};

export default function Scene({ children, showStats = true }: SceneProps): React.ReactElement {
  return (
    <Canvas>
      {showStats && <Stats />}
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Suspense fallback={null}>
        <Environment preset="sunset" background={false} />
        {children}
      </Suspense>
    </Canvas>
  );
}
