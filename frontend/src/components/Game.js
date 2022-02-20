import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import Beach from "./Beach";
import Timer from "./Timer";
import { PointerLockControls } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import crosshair1 from '../images/parallax-homepage/crosshair1.png'
import GarbageBin from './GarbageBin'
import Popup from './Modal'
import {useState} from 'react'
import Modal from "@mui/material/Modal"


export default function Game() {
    const [openModal, setOpenModal] = useState(false);
    const [score, setScore] = useState(0)
    return (
        <div style={{width: "100vw", height: "100vh"}}> 
        
            <Canvas
            raycaster={{
                computeOffsets: (e) => ({
                  offsetX: e.target.width / 2,
                  offsetY: e.target.height / 2
                })
              }}>
                <PointerLockControls />
                <Suspense fallback={null} >
                    {/* <Garbage 
                        onClick={() => console.log("click")}
                    /> */}
                    <Beach />
                    <GarbageBin />
                </Suspense >
                {/* <color attach="background" args={["black"]} /> */}
                <ambientLight intensity={0.5}/>
                <pointLight position={[10, 10, 0]} intensity={0.1}/>
            </Canvas>
            <img style={{position: "absolute", top: "50%", left: "50%", width:"36px", height:"36px", transform: "translate(-9px, -9px)"}}src={crosshair1} alt="crosshair1"/>
            <button className = "openModalBtn" onClick={() => {setOpenModal(true)}}>Click here to go back!</button>
            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Popup closeModal={() => setOpenModal(false)}/>
            </Modal> 
        </div>
    )
}