import React from "react";
import { useSelector } from "react-redux";

const GameDetail = () => {
  const gameDetails = useSelector((state) => state.gameDetails.game);
  console.log(gameDetails);
  return (
    <div>
      <h1>{gameDetails.name}</h1>
    </div>
  );
};

export default GameDetail;
