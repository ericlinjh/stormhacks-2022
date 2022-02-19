import React, {useEffect}from 'react'
import logo from '../images/parallax-homepage/gaimLogo.png'
import clouds from '../images/parallax-homepage/clouds.png'
import sun from '../images/parallax-homepage/sun.png'
import background from '../images/parallax-homepage/background.png'
import foreground from '../images/parallax-homepage/foreground.png'
import seagulls from '../sound/seagulls.mp3'
import Sound from 'react-sound'
import { Link } from 'react-router-dom'

export default function Homepage() {
    useEffect(() => {
        console.log("test");
        let clouds = document.getElementById('clouds');
        let sun = document.getElementById('sun');
        let background = document.getElementById('background');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
        let foreground = document.getElementById('foreground');
        let header = document.getElementById('header');

        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            clouds.style.left = '-' + value + 'px';
            sun.style.top = (50 - value) + 'px';
            background.style.left = value + 'px';
            text.style.marginRight = value + 'px';
            btn.style.marginLeft = value + 'px';
            foreground.style.top = value + 'px';
            header.style.top = value + 'px'
        })
    })
    return(
        <body>
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
                        <Link to="/">
                            <a className='active'>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/leaderboard">                        
                            <a>Leaderboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/play">
                            <a>Play</a>
                        </Link>
                    </li>
                </ul>
            </header>
            <section>
                <img src={clouds} id="clouds" alt="Home Page Clouds" />
                <img src={sun} id="sun" alt="Homepage Sun"/>
                <img src={background} id="background" alt="Homepage Background"/>
                <h1 id="text">G a r b a g e&nbsp;&nbsp;&nbsp;A i m</h1>
                <button href="#" id='btn'>Play Now</button>
                <img src={foreground} id="foreground" alt="Homepage Foreground"/>
            </section>
            <div>
                <h2 id="titleSec">T h e &nbsp;&nbsp;f u t u r e &nbsp;&nbsp;of&nbsp;&nbsp;E d u c a t i o n. . .</h2>
            </div>  
            <div>
                <p id="paragraphSec">Welcome to "Garbage Aim" also known as "G-aim" <br></br> Our goal is to inspire individuals to take a stand and learn more about waste disposal in an interactive aim game.<br></br><br></br>You can test your aim against other players and get the results you are looking for. The detailed statistics and the leaderboard are great ways to test your progress and at the same time, educate yourselves on the importance of proper waste management.</p>
            </div>  
        </body>
    )
}