import React, { useContext, useEffect, useState } from "react";

import Paddle from "../Paddle";
import Ball from "../Ball";
import Brick from "../Brick";

import { GameContext } from "../../state/context";
import { DIMENSIONS } from "../../utils/constants";
import Score from "../Score";
import Lives from "../Lives";
import HighScores from "../HighScores";

export default function GameContainer() {
  // const [showModal, setShowModal] = useState(false);
  const { state, showModal, setShowModal } = useContext(GameContext);
  useEffect(()=> {setShowModal(true)},[state.highScores])

  return (
    <div
      className="container"
      style={{
        width: DIMENSIONS.DEFAULT.WIDTH,
        height: DIMENSIONS.DEFAULT.HEIGHT
      }}
    >
      {state.bricks.map(brick => (
        <Brick key={brick.id} {...brick} />
      ))}

      <Paddle paddleX={state.paddle.x} />
      <Ball pos={state.ball} />
      <Score />
      <Lives />
      {showModal && <HighScores />}

    </div>
  );
}
