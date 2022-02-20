import React from 'react'
import '../Modal.css'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField'

export default function NameModal({ closeModal, resetGame, setName }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className='title'>
                    <h1>Enter your name</h1>
                </div>
                <TextField onChange={(e) => setName(e.target.value)}/>
                <div className='footer'>
                    <Link to="/"><button onClick={()=> closeModal(false)}>Go Back</button></Link>
                    <button onClick={resetGame}>Play A-gaim</button>
                </div>
            </div>
        </div>
    )
}
