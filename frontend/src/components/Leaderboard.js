import React, {useState, useEffect} from 'react'
import clouds from '../images/parallax-homepage/clouds.png'
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper}from '@mui/material'
import seagulls from '../sound/seagulls.mp3'
import Sound from 'react-sound'
import { Link } from 'react-router-dom'
import logo from '../images/parallax-homepage/gaimLogo.png'
import { getAllScores } from '../api/requestMethods'


export default function TempLeaderboard() {
  const [scores, setScores] = useState([])

  useEffect(() => {
    getAllScores()
        .then(response => {
            console.log(response.data);
            setScores(response.data.scores);
        })
        .catch(e => {
            console.log(e);
        });
}, [])


      scores.sort(function(a, b) {
        return b.score - a.score;
      }); 

      console.log(scores)
    
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
          <section>
            <img src={clouds} id="clouds" alt="Home Page Clouds" />
            <TableContainer component={Paper} sx={{backgroundColor: "#FDF7C2", width:"auto", height: "auto", zIndex: "10000"}}>
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
                      {score.dateOfScore}
                    </TableCell>
                    <TableCell sx={{paddingLeft: "100px"}}>
                      {score.score}
                    </TableCell>
                  </TableRow>  
                ))}
              </TableBody>
            </TableContainer>
          </section>
          
      </body>
    )
}