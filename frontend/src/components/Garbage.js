import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Scene() {
    const gltf = useLoader(GLTFLoader, '/Poimandres.gltf')
    return (
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
    )
  }