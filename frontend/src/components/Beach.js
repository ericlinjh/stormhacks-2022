import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { useRef, Suspense } from 'react'



export default function Beach() {
    // garbageRef = useRef()
    // console.log(garbageRef.current)
    const gltf = useLoader(GLTFLoader, '/beach.glb')
    return (
      <Suspense fallback={null}>
        <group  rotation={[0, -Math.PI/2, 0]} position={[5, 0, 0]} > 
            <primitive position={[-110, -85, -60]} rotation={[0, 0, 0]} object={gltf.scene} />
        </group>
      </Suspense>
    )
  }