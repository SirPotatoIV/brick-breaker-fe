import React, {useState} from "react";
import "./styles.css";

import GameProvider from "./state/context";

import GameContainer from "./components/GameContainer";
import HighScores from "./components/HighScores";

export default function App() {

  const [showModal, setShowModal] = useState(false);

  return (
    <GameProvider>
      <GameContainer />
      {showModal && <HighScores />}
      <button onClick={()=> {showModal ? setShowModal(false) : setShowModal(true)}}>Show Modal</button>
    </GameProvider>
  );
}
