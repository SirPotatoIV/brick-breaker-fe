import React, {useContext, useEffect} from "react";
import "./HighScores.css"
import Axios from "axios";
import {GameContext} from "../../state/context"

export default function GameContainer() {
  const {state, highScores, setHighScores, setShowModal} = useContext(GameContext)
  
 useEffect(()=> {
      Axios.get("http://localhost:5000/api/v1/high-scores")
    .then(function(res){setHighScores(res.data.highScores)})
  },[])
  

  return (
    <div className="highScores">
      <h1>High Scores</h1>
      <ol>
        {highScores.map(highscore=><li>{highscore.initials} {highscore.score}</li>)}
      </ol>
      <button onClick={()=>{setShowModal(false)}}>Close</button>
    </div>
  );
}
