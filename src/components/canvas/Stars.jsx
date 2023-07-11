import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Preload, Points, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../Loader'
import * as random from 'maath/random/dist/maath-random.esm'

const Stars = (props) => {
  const ref = useRef( )
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props} >
        <PointMaterial transperent color='#f272c8' size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}



const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas
      camera={{position: [0, 0, 1]}}
      >
        <Suspense fallback={CanvasLoader}>
        <OrbitControls 
        enableZoom={false} 
        // this allows you to only rotate the model left and right to this specific angel
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2} 
        />
          <Stars />

          {/* <Preload all /> */}
        </Suspense>
      </Canvas>
    </div>
  )
}







export default StarsCanvas
