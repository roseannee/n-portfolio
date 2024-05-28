import { Suspense } from "react"
import { Environment, Gltf, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

type Props = {
  src: string
}

// TODO update
export function Model({ src }: Props) {
  return (
    <Canvas
      gl={{ antialias: false }}
      shadows
      camera={{ position: [0, 3, 10] }}
      className="rounded-md"
      dpr={[1, 1.5]}
    >
      <Suspense>
        <color attach="background" args={[0x120326]} />
        <ambientLight intensity={0.5} />
        <Environment preset="lobby" />
        <Gltf src={src} position={[0, 0, 0]} />

        <OrbitControls
        // enabled={width > 1024}
        // autoRotate
        // autoRotateSpeed={0.5}
        // enableZoom={true}
        />
      </Suspense>
    </Canvas>
  )
}
