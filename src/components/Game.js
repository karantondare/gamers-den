import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Game = ({ gameData }) => {
  return (
    <StyledGame>
      <div className="flex">
        <div>
          <Link to={`/${gameData.id}`}>
            <h3>{gameData.name}</h3>
            <p>{gameData.released}</p>
            <p>
              Rating: <span>{gameData.rating}</span>
            </p>
          </Link>
        </div>
        <div>
          <img src={gameData.background_image} alt={gameData.name} />
        </div>
      </div>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  max-width: 25vw;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0px 50px;
  cursor: pointer;
  overflow: auto;
  background-color: #faf9f7;

  .flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  h3 {
    padding: 0.5rem;
    color: rgb(96, 165, 250);
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  @media (max-width: 818px) {
    max-width: 40vw;
    max-height: auto;
  }
`;

export default Game;
