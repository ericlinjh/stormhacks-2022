import React from 'react'
import Navbar from './Navbar'
import clouds from '../images/parallax-homepage/clouds.png'
import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper}from '@mui/material'

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
          <Navbar />
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