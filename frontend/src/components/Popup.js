import React from 'react'
import '../Modal.css'
import { Link } from 'react-router-dom'

export default function Popup({closeModal}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn"><button onClick={closeModal}>X</button>
                </div>
                <div className='title'>
                    <h1>Do you want to continue playing?</h1>
                </div>
                <div className='body'>
                    <p>You can choose to continue playing or go back to the home page.</p>
                </div>
                <div className='footer'>
                    <Link to="/"><button>Quit G-aim</button></Link>
                    <button onClick={()=> closeModal(true)}>Continue G-aim</button>
                </div>
            </div>
        </div>
    )
}
