import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import type { Mesh } from 'three'

function DistortedSphere() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12
  })

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color="#7c5cff"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  )
}

function AccentRing() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.05
    meshRef.current.rotation.x = Math.PI / 3
  })

  return (
    <mesh ref={meshRef} scale={3.5}>
      <torusGeometry args={[1, 0.02, 16, 100]} />
      <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.4} />
    </mesh>
  )
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-4, -2, 4]} intensity={2} color="#7c5cff" />
      <pointLight position={[4, 2, -2]} intensity={1.5} color="#22d3ee" />
      <Stars radius={80} depth={40} count={1200} factor={3} saturation={0} fade speed={0.5} />
      <DistortedSphere />
      <AccentRing />
    </Canvas>
  )
}
