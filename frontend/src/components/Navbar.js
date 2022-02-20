import React from 'react'
import seagulls from '../sound/seagulls.mp3'
import Sound from 'react-sound'
import { Link } from 'react-router-dom'
import logo from '../images/parallax-homepage/gaimLogo.png'

export default function Navbar() {
    return(
        <header id="header">
            <Sound
                url={seagulls}
                playStatus={Sound.status.PLAYING}
                playFromPosition={100}
                volume={5}
            >
            </Sound>
            <a href='/'><img src={logo} alt='logo' id="logo"></img></a> 
            <ul>
                <li>
                    <Link to="/" className='active header-button'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/leaderboard" className='header-button'>                        
                        Leaderboard
                    </Link>
                </li>
                <li>
                    <Link to="/login" className='header-button'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link to="/play" className='header-button'>
                        Play
                    </Link>
                </li>
            </ul>
        </header>
    )
}