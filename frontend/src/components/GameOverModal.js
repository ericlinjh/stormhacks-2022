import React from 'react'
import '../Modal.css'

export default function Popup({ closeModal, score, resetGame }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                <button onClick={()=> closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h1>"78% of marine mammals are at risk of choking on plastic"</h1>
                </div>
                <div className='body'>
                    <p>Game Over. Your score is {score}</p>
                    <br />
                </div>
                <div className='footer'>
                    <button onClick={()=> closeModal(false)}>Quit G-aim</button>
                    <button onClick={resetGame}>Play Again</button>
                </div>
            </div>
        </div>
    )
}
