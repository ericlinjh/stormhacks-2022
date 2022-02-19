import React from 'react'
import { Canvas } from "@react-three/fiber";


export default function Game() {
    return (
        <div style={{width: "100vw", height: "100vh"}}> 
            <Canvas>
                {/* <color attach="background" args={["black"]} /> */}
            </Canvas>
        </div>
    )
}