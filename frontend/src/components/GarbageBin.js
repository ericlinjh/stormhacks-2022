import { useState, useEffect } from 'react'
import Garbage from './Garbage.js'
import { useFrame } from '@react-three/fiber'


export default function GarbageBin({score, setScore, livesLeft, setLivesLeft, isPopupModalOpen, isGameOverModalOpen, isNameModalOpen, unlock }) {
    const [garbageArray, setGarbageArray] = useState([[0, 7, -4], [-3, 10, -7], [8, 12, -5], [-7, 14, -14], [9, 16, -11] ])

    function decrementY(array, delta){
        if(!isPopupModalOpen && !isGameOverModalOpen && !isNameModalOpen){
        const velocity = 7 * delta
        const newArray = array.map((position) => [position[0], position[1] - velocity, position[2]])
        setGarbageArray(newArray)
        }
        else{
            unlock()
        }
    }

    useEffect(() => {
        if (livesLeft === 0) {
            setGarbageArray([[0, 7, -4], [-3, 10, -7], [8, 12, -5], [-7, 14, -14], [9, 16, -11] ])
        }
    }, [livesLeft])

    function checkCollisions(array){
        array.forEach((element, index) => {
            if (element[1] <= -8) { 
                updateGarbagePosition(index)
                setLivesLeft(prevLives => prevLives - 1)
             }    
        });
    }

    function generateNewPosition(){
        const x = Math.random() * 24 - 12
        const y = 10
        const z = Math.random() * -10 - 4
        return [x, y, z]
    }

    function updateGarbagePosition(index){
        let newArray = [...garbageArray]
        newArray[index] = generateNewPosition()
        setGarbageArray(newArray)
    }

    useFrame((state, delta) => {
        decrementY(garbageArray, delta);
        checkCollisions(garbageArray);
      })

    return(
        <group>
            {garbageArray.map((position, index) => (
                <Garbage key={index} position={position} onClick={() => { updateGarbagePosition(index); setScore(prevScore => prevScore + 1)}}/>
            ))}
        </group>

    )
}