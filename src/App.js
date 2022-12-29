import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';
import { Player } from './components/Player';

// setting style in Canvas may be the wrong way to do this...
function App() {
  return (
  <>
      <Canvas style={{width: "1920px", height: "1080px"}}> 

      <Sky sunPosition={[ 100, 100, 20 ]} />
      <ambientLight intensity={0.5} />

      <Physics>
        <Player />
        <Ground />
      </Physics>

    </Canvas>
  </>
  );
}

export default App;
