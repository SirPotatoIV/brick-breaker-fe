import React, {useState} from "react";
import "./styles.css";

import GameProvider from "./state/context";

import GameContainer from "./components/GameContainer";
import HighScores from "./components/HighScores";

export default function App() {

  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
}
