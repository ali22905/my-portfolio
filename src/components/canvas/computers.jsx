import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Computers = ({isMobile}) => {
  const computer = useGLTF('/desktop_pc/scene.gltf')

  return (
    // make the model and set its environment and lights
    <mesh>
      {/* setting the lighting of the colors of the model */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      {/* to add lights to the model like there is a flash pointing to it */}
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, -10]}
        angle={0.12}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      {/* this is the model */}
      <primitive 
      object={computer.scene} 
      scale={isMobile ? 0.5 : 0.75}
      position={isMobile ? [0, 2.5, -1.5] : [0, 1, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = ({isMobile}) => {
  return (
    <Canvas
      // frameLoop="demand"
      shadows
      // to make a camera look at the shape from the angels 20 from x and 3 from y and 5 from z axis and the FOV how wide are field of view
      camera={{position: [35, 5, 10], fov: 20}}
      // must be true to render the model
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* comming from react and allows you to have a loader while this is loading */}
      {/* make something while this thing is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* allow us to move the model with your mouse */}
        <OrbitControls 
        enableZoom={false} 
        // this allows you to only rotate the model left and right to this specific angel
        // maxPolarAngle={Math.PI / 2} 
        // minPolarAngle={Math.PI / 2} 
        />
        <Computers isMobile={isMobile}  />
      </Suspense>

      {/* <Preload all /> */}
    </Canvas>
  )
}

export default ComputersCanvas 
