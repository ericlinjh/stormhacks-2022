import React, { Suspense, useEffect, useState, useCallback, useRef } from 'react'
import { Canvas } from "@react-three/fiber";
import Beach from "./Beach";
import { PointerLockControls } from "@react-three/drei";
import { useLoader } from '@react-three/fiber'
import crosshair1 from '../images/parallax-homepage/crosshair1.png'
import GarbageBin from './GarbageBin'
import Popup from './Popup'
import GameOverModal from './GameOverModal'
import Modal from "@mui/material/Modal"
import PropTypes from 'prop-types'


export default function Game() {
    const [isPopupModalOpen, setIsPopupModalOpen] = useState(false);
    const [isGameOverModalOpen, setIsGameOverModalOpen] = useState(false)
    const [score, setScore] = useState(0)
    const [livesLeft, setLivesLeft] = useState(6)
    const controls = useRef()

    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            setIsPopupModalOpen(true)
        }
    })

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return() => {
            document.removeEventListener("keydown", escFunction, false);
        }
    })


    useEffect(() => {
        if (livesLeft === 0) {
            setIsGameOverModalOpen(true)
            controls.current.unlock()
        }
    }, [livesLeft])

    function resetGame() {
        setScore(0)
        setLivesLeft(6)
        setIsGameOverModalOpen(false)
    }
    return (
        <div style={{width: "100vw", height: "100vh"}}> 
        
            <Canvas
            raycaster={{
                computeOffsets: (e) => ({
                  offsetX: e.target.width / 2,
                  offsetY: e.target.height / 2
                })
              }}>
                  
                <PointerLockControls ref={controls}/>
                <Suspense fallback={null} >
                    {/* <Garbage 
                        onClick={() => console.log("click")}
                    /> */}
                    <Beach />
                    <GarbageBin score={score} setScore={setScore} livesLeft={livesLeft} setLivesLeft={setLivesLeft} isPopupModalOpen={isPopupModalOpen} isGameOverModalOpen={isGameOverModalOpen}/>
                </Suspense >
                {/* <color attach="background" args={["black"]} /> */}
                <ambientLight intensity={0.5}/>
                <pointLight position={[10, 10, 0]} intensity={0.1}/>
            </Canvas>
            <div style={{ position: "absolute", top: "5%", left: "5%", width:"36px", height:"36px", fontSize:"500%" }}>SCORE: {score}</div>
            <div style={{ position: "absolute", top: "5%", right: "10%", width:"36px", height:"36px", fontSize:"500%" }}>LIVES: {livesLeft}</div>
            <img style={{position: "absolute", top: "50%", left: "50%", width:"36px", height:"36px", transform: "translate(-9px, -9px)"}} src={crosshair1} alt="crosshair1"/>
            <button style={{ position: "absolute", top: "88%", left: "2%", height:"92px", width: "100px", fontSize:"2em", border:"none", borderRadius:"20px" }} className = "openModalBtn" onClick={() => {setIsPopupModalOpen(true)}}>Press Escape!</button>
            <Modal open={isPopupModalOpen} onClose={() => setIsPopupModalOpen(false)}>
                <Popup closeModal={() => setIsPopupModalOpen(false)}/>
            </Modal>
            <Modal open={isGameOverModalOpen} onClose={() => setIsGameOverModalOpen(false)}>
                <GameOverModal closeModal={() => setIsPopupModalOpen(false)} score={score} resetGame={resetGame} />
            </Modal>

        </div>
    )
}

Game.propTypes = {
    score: PropTypes.string.isRequired,
};