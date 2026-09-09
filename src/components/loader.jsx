import { Html, useGLTF } from '@react-three/drei'
import Screen from '../pages/main'

const monitor = '/models/monitor-v1.glb'

const Model = (props) => {
  const { scene } = useGLTF(monitor)

  return (
    <group {...props}>
      <primitive object={scene} scale={1.0} />

      {/* Malla Verde Neón Emisiva para activar el Bloom 3D */}
      <mesh 
        position={[-0.01, 0.37, 0.005]} 
        rotation={[0, 3.1, 0]}
      >
        <planeGeometry args={[0.5, 0.4]} /> 
        <meshBasicMaterial
          color={[0, 3, 0.5]} 
          toneMapped={false}
        />
      </mesh> 

      {/* Contenido HTML de la Pantalla */}
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={0.175}
        position={[-0.015, 0.365, 0.02]} 
        rotation={[0, 3.15, 0]}
        style={{
          width: '1010px',
          height: '1250px',
          boxSizing: 'border-box'
        }}
      >
        <Screen />
      </Html>
    </group>
  )
}

useGLTF.preload(monitor)

export default Model