import { Html, useGLTF } from '@react-three/drei'
import Screen from '../pages/main'

const room = '/models/table.gltf'

const Room = (props) => {
  const { scene } = useGLTF(room)

  return (
    <group {...props}>
      <primitive object={scene} scale={1.0} />
    </group>
  )
}

useGLTF.preload(room)

export default Room