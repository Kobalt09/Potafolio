import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { OrbitControls } from '@react-three/drei';
import { Vector2, Vector3 } from 'three';
import Model from './components/loader.jsx';
import Room from './components/room.jsx';

// Componente para animar la cámara suavemente a una posición objetivo
function CameraRig({ targetPosition, targetLookAt }) {
  const controlsRef = useRef()

  useFrame((state, delta) => {
    if (!controlsRef.current) return

    // Interpola suavemente la posición de la cámara (lerp)
    state.camera.position.lerp(targetPosition, 0.05)

    // Interpola suavemente el punto al que mira la cámara
    controlsRef.current.target.lerp(targetLookAt, 0.05)
    controlsRef.current.update()
  })

  // Desactivamos la rotación (arrastrar) y el desplazamiento lateral (pan)
  return (
    <OrbitControls 
      ref={controlsRef} 
      enableDamping 
      enableZoom={false} 
      enableRotate={false} 
      enablePan={false} 
    />
  )
}

function App() {
  const cameraViews = {
    default: {
      position: new Vector3(0, 0.05, 5.4),
      lookAt: new Vector3(0, 0, 0)
    },
    monitor: {
      position: new Vector3(0.1, 0.05, 5.6),
      lookAt: new Vector3(0.21, 0.0, 4.5)
    },
    leftObject: {
      position: new Vector3(0.2, 0.3, 5.4),
      lookAt: new Vector3(-0.8, -0.6, 4.2)
    }
  }

  const [activeView, setActiveView] = React.useState('default')

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#3f413f', position: 'relative' }}>
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        zIndex: 10, 
        display: 'flex', 
        gap: '10px' 
      }}>
        <button onClick={() => setActiveView('leftObject')}>table</button>
        <button onClick={() => setActiveView('default')}>general view</button>
        <button onClick={() => setActiveView('monitor')}>focus on monitor</button>
      </div>

      {/* Se removió la prop enableRotate del Canvas ya que pertenece a OrbitControls */}
      <Canvas camera={{ position: [0, 0.05, 5.4], fov: 45 }}>
        <Suspense fallback={null}>
          <Model position={[0.2, -0.3, 4.5]} rotation={[0, 3, 0]} />
          <Room position={[0.2, -0.3, 4.4]} rotation={[0, 2, 0]} />
        </Suspense>

        <ambientLight intensity={0.5} />
        <directionalLight color="white" position={[0, 4, 5]} />

        <CameraRig 
          targetPosition={cameraViews[activeView].position} 
          targetLookAt={cameraViews[activeView].lookAt} 
        />

        <EffectComposer disableNormalPass>
          <Bloom intensity={1.5} luminanceThreshold={0.2} mipmapBlur />
          <ChromaticAberration offset={new Vector2(0.002, 0.002)} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default App