import React, { useState, useEffect } from "react"
import { getAllScores } from "../api/requestMethods"
import { Link } from "react-router-dom"

const Leaderboard = () => {
  const [scores, setScores] = useState([])
  useEffect(() => {
    retrieveScores()
  }, [])

  const retrieveScores = () => {
    getAllScores()
      .then(response => {
        console.log(response.data);
        setScores(response.data.scores);
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
      <div style={{}}>
          {scores?.map(score => {
            return (
              <div>
                <div>
                {`${score.name ?? 'Anonymous'} scored ${score.score ?? 'an undefined score'} at ${score.dateOfScore ?? 'who knows when'}`}
                </div>
                <br/>
              </div>
            );
          })}
      </div>
  );

}

export default Leaderboard
