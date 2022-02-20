import React, {useEffect} from 'react'
import clouds from '../images/parallax-homepage/clouds.png'
import sun from '../images/parallax-homepage/sun.png'
import ocean from '../images/parallax-homepage/ocean.png'
import island from '../images/parallax-homepage/island.png'
import beach from '../images/parallax-homepage/beach.png'
import tree from '../images/parallax-homepage/tree.png'
import { Link } from 'react-router-dom'
import seagulls from '../sound/seagulls.mp3'
import Sound from 'react-sound'
import logo from '../images/parallax-homepage/gaimLogo.png'


export default function Homepage() {
    useEffect(() => {
        console.log("test");
        let clouds = document.getElementById('clouds');
        let sun = document.getElementById('sun');
        let island = document.getElementById('island');
        let text = document.getElementById('text');

        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            clouds.style.left = '-' + value + 'px';
            sun.style.top = (50 - value) + 'px';
            island.style.left = value + 'px';
            text.style.marginRight = 3 * value + 'px';
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
            <section>
                <img src={clouds} id="clouds" alt="Home Page Clouds" />
                <img src={sun} id="sun" alt="Homepage Sun"/>
                <img src={island} id="island" alt="Homepage Island"/>
                <img src={ocean} id="ocean" alt="Homepage Ocean"/>
                <h1 id="text">G a r b a g e&nbsp;&nbsp;&nbsp;A i m</h1>
                <Link to='/play' style={{zIndex: "10000"}}>
                    <button id='btn'>Play Now</button>
                </Link>
                <img src={beach} id="beach" alt="Homepage Foreground"/>
                <img src={tree} id="tree" alt="Homepage Tree"/>
            </section>
            <article id="boxOne">
                <div>
                    <h2 id="titleSec">T h e &nbsp;&nbsp;f u t u r e &nbsp;&nbsp;of&nbsp;&nbsp;E d u c a t i o n. . .</h2>
                </div>  
                <div>
                    <p id="paragraphSec">Welcome to "Garbage Aim" also known as "G-aim" <br></br> Our goal is to inspire individuals to take a stand and learn more about waste disposal in an interactive aim game.<br></br><br></br>You can test your aim against other players and get the results you are looking for. The detailed statistics and the leaderboard are great ways to test your progress and at the same time, educate yourselves on the importance of proper waste management.</p>
                </div>  
            </article>
        </body>
    )
}