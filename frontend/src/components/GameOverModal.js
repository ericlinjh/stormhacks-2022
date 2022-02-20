import React from 'react'
import '../Modal.css'
import { Link } from 'react-router-dom'

export default function Popup({ closeModal, score, resetGame }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className='title'>
                    <h1>Congratulations! You've picked up {score} pieces of garbage. However, there are still 5.25 trillion pieces of plastic waste estimated to be in our oceans. 269,000 tons float, 4 billion microfibers per km² dwell below the surface. Do your part today and pick up any waste you see!</h1>
                </div>
                <div className='body'>
                    <p>Game Over. Your score is {score}</p>
                    <br />
                </div>
                <div className='footer'>
                    <Link to="/"><button onClick={()=> closeModal(false)}>Quit G-aim</button></Link>
                    <button onClick={resetGame}>Play A-gaim</button>
                </div>
            </div>
        </div>
    )
}
