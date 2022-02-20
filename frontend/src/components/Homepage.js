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
import arrowDown from '../images/parallax-homepage/arrow-down.png'
import surfriders from '../images/organizations/surfriders.png'
import plasticoceans from '../images/organizations/plasticoceans.png'
import oceana from '../images/organizations/oceana.png'
import stormy from '../images/stormy.png'
import sparky from '../images/sparky.png'

export default function Homepage() {
    useEffect(() => {
        console.log("test");
        let clouds = document.getElementById('clouds');
        let sun = document.getElementById('sun');
        let island = document.getElementById('island');
        let text = document.getElementById('text');
        let header = document.getElementById('header');
        let headerContainer = document.getElementById('header-container');

        window.addEventListener('scroll', function() {
            let value = window.scrollY;
            clouds.style.left = '-' + value + 'px';
            sun.style.top = (50 - value) + 'px';
            island.style.left = value + 'px';
            text.style.marginRight = 3 * value + 'px';
            headerContainer.style.top = value + 'px'

            if (value > 850) {
                header.style.transform =  "translateY(-100%)";
                headerContainer.addEventListener("mouseover", function( event ) {
                    header.style.transform = "translateY(0%)";
                    console.log("hover")
                })
                headerContainer.addEventListener("mouseout", function( event ) {
                    header.style.transform = "translateY(-100%)";
                    console.log("off")
                })
            } else {
                header.style.transform =  "translateY(0)";
            }
        })
    })
    return(

        <body>
            <div class="header-container" id="header-container">
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
            </div>
            <section>
                <img src={clouds} id="clouds" alt="Home Page Clouds" />
                <img src={sun} id="sun" alt="Homepage Sun"/>
                <img src={island} id="island" alt="Homepage Island"/>
                <img src={ocean} id="ocean" alt="Homepage Ocean"/>
                <h1 id="text">G a r b a g e&nbsp;&nbsp;&nbsp;A i m</h1>
                <Link to='/play' style={{zIndex: "10000"}}>
                    <button id='btn'>Play Now</button>
                </Link>
                <img src={arrowDown} id="arrowDown" alt="Arrow Down" />
                <img src={beach} id="beach" alt="Homepage Foreground"/>
                <img src={tree} id="tree" alt="Homepage Tree"/>
            </section>
            <article id="boxOne">
                <div>
                    <h2 id="titleSec">T h e &nbsp;&nbsp;f u t u r e &nbsp;&nbsp;of&nbsp;&nbsp;E d u c a t i o n. . .</h2>
                </div>  
                <div>
                    <p id="paragraphSec">Welcome to "Garbage Aim" also known as "G-aim" <br></br> Our goal is to inspire individuals to take a stand and learn more about waste disposal in an interactive aim game.<br></br><br></br>Put your aim to the test and pick up falling pieces of trash before it hits the beach floor! Make sure you don't miss, as you only have six lives to lose!<br /><br />Pit your aim against other players and get the results you are looking for. The detailed statistics and the leaderboard are great ways to test your progress and at the same time, educate yourselves on the importance of proper waste management. <br/><br/>Help protect animals like Sparky and Stormy!</p>
                    <div style={{display: 'flex', justifyContent: 'center', paddingTop: "1em"}}>
                        <img src={stormy} alt="Stormy" style={{height:"5%", width: "5%"}}/>
                        <img src={sparky} alt="Sparky" style={{height:"5%", width: "5%", paddingTop: "10px"}}/>
                    </div>

                </div>
                <div>
                    <h2 id="titleSec" style={{paddingTop: "1em"}}>H o w &nbsp; y o u &nbsp; c a n &nbsp; h e l p</h2>
                </div>
                <div>
                    <p id="paragraphSec">There are many ways you can help. Simply picking up pieces of litter you find and putting them in their appropriate bins can help make a difference. Try your best to purchase low-waste and reusable options wherever possible, or even volunteer! Also consider donating or being involved with some of the following Canadian Oceancare organizations:<br /><br /></p>
                </div>
                <div className="organizations-div">
                    <a href="http://www.canada.surfrider.org/">
                        <img src={surfriders} alt="Surfriders Canada Logo" style={{width: "80%", marginLeft: "5em"}}/>
                    </a>
                    <p id="paragraphSec-org">
                        <a href="http://www.canada.surfrider.org/">
                            <h1 className="org-name" style={{textAlign: "left", fontSize: "200%", paddingBottom: "0.25em"}}>The Surfrider Foundation</h1>
                        </a>
                        <em>The Surfrider Foundation is a community of everyday people who passionately protect our playground - the ocean, waves, and beaches that provide us so much enjoyment.</em><br />
                        The Surfrider Foundation USA is a U.S. 501 grassroots non-profit environmental organization that works to protect and preserve the world's oceans, waves and beaches. It focuses on water quality, beach access, beach and surf spot preservation, and sustaining marine and coastal ecosystems. The Canadian chapters of Surfrider Foundation Canada (SFC) have an impressive track record of environmental innovation in diverse Canadian coastal communities focusing on plastic pollution, clean water, coastal preservation, ocean protection, and beach access.
                    </p>
                </div>
                <div className="organizations-div">
                    <p id="paragraphSec-org">
                        <a href="https://plasticoceans.ca/">
                            <h1 className="org-name" style={{textAlign: "left", fontSize: "200%", paddingBottom: "0.25em"}}>Plastic Oceans Canada</h1>
                        </a>
                        <em>Providing education that inspires change through direct action, advocacy, and science innovation.</em><br />
                        Plastic Oceans Canada’s mission is to solve plastic pollution. Plastic Oceans Canada creates change by advocating for Canadian businesses to take impactful steps towards eliminating their plastic pollution footprint, driving towards implementation of changes with government, producers, recyclers and consumers and supporting and implementing programs to clean our coastlines.
                    </p>
                    <a href="https://plasticoceans.ca/" style={{paddingRight: "25em"}}>
                        <img src={plasticoceans} alt="Plastic Oceans Logo" style={{width: "200%", height: "80%", paddingLeft: "-15em"}}/>
                    </a>
                </div>
                <div className="organizations-div">
                    <a href="https://oceana.ca/en/">
                        <img className="org-name" src={oceana} alt="Oceana Logo" style={{width: "80%", marginLeft: "5em", marginTop: "7em"}}/>
                    </a>
                    <p id="paragraphSec-org">
                        <a href="https://oceana.ca/en/">
                            <h1 className="org-name" style={{textAlign: "left", fontSize: "200%", paddingBottom: "0.25em"}}>Oceana</h1>
                        </a>
                        <em>Oceana Canada seeks to make our oceans as rich, healthy and abundant as they once were.</em><br />
                        Oceana Canada was established as an independent charity in 2015 and is part of the largest international advocacy group dedicated solely to ocean conservation. Canada has the world’s longest coastline in the world, with an ocean surface of 7.1 million square kilometres, or 70 per cent of its landmass. We believe that Canada has a national and global obligation to manage our natural resources responsibly and help ensure a sustainable source of protein for the world’s growing population.
                    </p>
                </div>
            </article>
        </body>
    )
}