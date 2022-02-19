import React from 'react'
import logo from '../images/parallax-homepage/gaimLogo.png'
import clouds from '../images/parallax-homepage/clouds.png'
import sun from '../images/parallax-homepage/sun.png'
import background from '../images/parallax-homepage/background.png'
import foreground from '../images/parallax-homepage/foreground.png'
import seagulls from '../sound/seagulls.mp3'
import Sound from 'react-sound'

export default function Homepage() {
    return(
        <body>
            <header>
                <Sound
                    url={seagulls}
                    playStatus={Sound.status.PLAYING}
                    playFromPosition={100}
                    volume={5}
                >
                </Sound>
                <a href='/'><img src={logo} alt='logo' id="logo"></img></a> 
                <ul>
                    <li><a href='/#' className='active'>Home</a></li>
                    <li><a href='/#'>About</a></li>
                    <li><a href='/#'>Login</a></li>
                    <li><a href='/#'>Play</a></li>
                </ul>
            </header>
            <section>
                <img src={clouds} id="clouds" alt="Home Page Clouds" />
                <img src={sun} id="sun" alt="Homepage Sun"/>
                <img src={background} id="background" alt="Homepage Background"/>
                <h1 className="text">G a r b a g e&nbsp;&nbsp;&nbsp;A i m</h1>
                <button href="#" className="btn">Play Now</button>
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