import React from "react";
import "./HighScores.css"

export default function GameContainer() {

  return (
    <div className="highScores">
      <h1>High Scores</h1>
      <ol>
          <li>JMO 65</li>
          <li>JMO 65</li>
          <li>JMO 65</li>
      </ol>
      <button>Start New Game</button>
    </div>
  );
}
