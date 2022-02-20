import React from 'react'
import clouds from '../images/parallax-homepage/clouds.png'
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper}from '@mui/material'
import seagulls from '../sound/seagulls.mp3'
import Sound from 'react-sound'
import { Link } from 'react-router-dom'
import logo from '../images/parallax-homepage/gaimLogo.png'

export default function TempLeaderboard() {
    const scores = [
        {name: "Brian", score: "69", date: "2022-02-19T20:22:21.017Z"},
        {name: "Eric", score: "690", date: "2022-01-19T20:22:21.017Z"},
        {name: "Dylan", score: "609", date: "2022-03-19T20:22:21.017Z"},
        {name: "Hargun", score: "169", date: "2022-04-19T20:22:21.017Z"},
        {name: "Briana", score: "69", date: "2022-02-19T20:22:21.017Z"},
        {name: "Dexter", score: "100", date: "2022-02-19T20:22:21.017Z"},
      ];
    
    return(
      <body style={{
        background: "linear-gradient(#92E1F9,#92F9D0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
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
                    <Link to="/" className='header-button'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/leaderboard" className='active header-button'>                        
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
          <TableContainer component={Paper} sx={{backgroundColor: "#FDF7C2", width:"auto", height: "auto"}}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell sx={{paddingLeft: "100px"}}>Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scores.map((score, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell sx={{paddingRight: "50px"}}>
                    {score.name}
                  </TableCell>
                  <TableCell>
                    {score.date}
                  </TableCell>
                  <TableCell sx={{paddingLeft: "100px"}}>
                    {score.score}
                  </TableCell>
                </TableRow>  
              ))}
            </TableBody>
          </TableContainer>
      </body>
    )
}