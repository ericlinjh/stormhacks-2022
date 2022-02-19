import React from 'react'
import clouds from '../images/parallax-homepage/clouds.png'
import sun from '../images/parallax-homepage/sun.png'
import background from '../images/parallax-homepage/background.png'
import foreground from '../images/parallax-homepage/foreground.png'

export default function Homepage() {
    return(
        <body>
            <header>
                <a href='/#' class='logo'>LOGO</a>
                <ul>
                    <li><a href='/#' class='active'>Home</a></li>
                    <li><a href='/#'>About</a></li>
                    <li><a href='/#'>Login</a></li>
                    <li><a href='/#'>Play</a></li>
                </ul>
            </header>
            <section>
                <img src={clouds} id="clouds" alt="Home Page Clouds" />
                <img src={sun} id="sun" alt="Homepage Sun"/>
                <img src={background} id="background" alt="Homepage Background"/>
                <h2>Garbager Aim G-Aim</h2>
                <img id="text" src={foreground} id="foreground" alt="Homepage Foreground"/>
            </section>
        </body>
    )
}