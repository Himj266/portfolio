import _times from 'lodash/times';

//comps
import { Canvas } from '@react-three/fiber';
import { Cube } from './Cube';

export const CubeBackground = (): JSX.Element => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[2, 2, 2]} />
      {_times(1, (index) => (
        <Cube />
      ))}
    </Canvas>
  );
};
