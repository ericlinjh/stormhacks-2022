import { useState } from 'react'
import Model from './Garbage.js'
import { useFrame } from '@react-three/fiber'


export default function GarbageBin(){
    const [garbageArray, setGarbageArray] = useState([[0, 7, -4], [-3, 10, -7], [8, 12, -5], [-7, 14, -14], [9, 16, -11] ])

    function decrementY(array, delta){
        const velocity = 7 * delta
        const newArray = array.map((position) => [position[0], position[1] - velocity, position[2]])
        setGarbageArray(newArray)
    }

    function checkCollisions(array){
        array.forEach((element, index) => {
            if (element[1] <= -8) { 
                let newArray = [...array]
                newArray[index] = generateNewPosition()
                setGarbageArray(newArray)
             }    
        });
    }

    function generateNewPosition(){
        const x = Math.random() * 24 - 12
        const y = 10
        const z = Math.random() * -10 - 4
        return [x, y, z]
    }

    useFrame((state, delta) => {
        decrementY(garbageArray, delta);
        checkCollisions(garbageArray);
      })

    return(
        <group>
            {garbageArray.map((position, index) => (
                <Model key={index} position={position}/>
            ))}
        </group>

    )
}