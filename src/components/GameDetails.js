import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GameDetail from "./GameDetail";
import { useParams } from "react-router-dom";

const GameDetails = () => {


  return (
    <div>
      <Navbar />
      <GameDetail />
      <Footer />
    </div>
  );
};

export default GameDetails;
