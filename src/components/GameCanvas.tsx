import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

type GameCanvasProps = {
  children: React.ReactNode;
};

export function GameCanvas({ children }: GameCanvasProps) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {children}
    </Canvas>
  );
}
