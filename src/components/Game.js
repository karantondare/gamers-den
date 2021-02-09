import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
// import { smallImage } from "../utlis";
import { popup } from "../animations";

const Game = ({ name, released, image, id, genres }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <div>
        <Link to={`/game/${id}`}>
          <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>

          <p>Release Date: {released}</p>
          <motion.img
            layoutId={`image ${stringPathId}`}
            src={image}
            alt={name}
          />
        </Link>
      </div>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  max-width: 40vw;

  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.3rem;
  cursor: pointer;
  overflow: auto;
  background-color: #faf9f7;
  h3 {
    padding: 0.5rem;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

  @media (max-width: 818px) {
    max-width: 80vw;
    max-height: auto;
  }
`;

export default Game;
