import { useRef } from 'react';
import _times from 'lodash/times';

//comps
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';

//types
import type { Mesh } from 'three';

export const Cube = (): JSX.Element => {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta;
      ref.current.rotation.z += delta;
    }
  });

  return (
    <Box ref={ref}>
      <meshBasicMaterial color="orange" />
    </Box>
  );
};
