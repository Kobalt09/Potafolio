import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing'
import { OrbitControls } from '@react-three/drei'
import { Vector2, Vector3 } from 'three'
import Model from './components/loader.jsx'

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

  return <OrbitControls ref={controlsRef} enableDamping enableZoom={false} />
}

function App() {
  // Posiciones y focos para cada vista [X, Y, Z]
  const cameraViews = {
    default: {
      position: new Vector3(0, 0.05, 5.4),
      lookAt: new Vector3(0, 0, 0)
    },
    monitor: {
      position: new Vector3(0.1, 0.05, 5.8), // Ajusta según tu modelo
      lookAt: new Vector3(0.2, 0.0, 4.5)
    },
    leftObject: {
      position: new Vector3(-1.0, 0.1, 5.0), // Ajusta según tu modelo
      lookAt: new Vector3(-0.8, -0.2, 4.2)
    }
  }

  const [activeView, setActiveView] = React.useState('default')

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#3f413f', position: 'relative' }}>
      {/* Botones de navegación sobre el Canvas */}
      <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10, display: 'flex', gap: '10px' }}>
        <button onClick={() => setActiveView('default')}>Vista General</button>
        <button onClick={() => setActiveView('monitor')}>Centrar Monitor</button>
        <button onClick={() => setActiveView('leftObject')}>Objeto Izquierda</button>
      </div>

      <Canvas camera={{ position: [0, 0.05, 5.4], fov: 45 }}>
        <Suspense fallback={null}>
          <Model position={[0.2, -0.3, 4.5]} rotation={[0, 3, 0]} />
        </Suspense>

        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />

        {/* Rig animador de cámara */}
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