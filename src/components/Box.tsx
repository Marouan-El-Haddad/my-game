import React, { useRef, useState } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Mesh } from 'three';

type BoxProps = {
  position: [number, number, number];
  color?: string;
  scale?: number;
};

export default function Box({
  position,
  color = 'orange',
  scale = 1,
  ...props
}: BoxProps): React.ReactElement {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame(() => {
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      position={position}
      ref={meshRef}
      scale={active ? scale * 1.5 : scale}
      onClick={() => setActive(!active)}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
    </mesh>
  );
}
