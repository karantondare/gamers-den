import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchGames } from "../actions/gamesActions";
import Game from "./Game";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CircularProgress from "@material-ui/core/CircularProgress";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Popular");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { popularGames, newGames, upcomingGames } = useSelector(
    (state) => state.games
  );

  function updateSelectedOption(selectedOption) {
    setSelectedOption(selectedOption);
  }

  const getAllGames = async () => {
    await dispatch(fetchGames());
    setLoading(false);
  };

  useEffect(() => {
    getAllGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar
        selectedOption={selectedOption}
        updateSelectedOption={updateSelectedOption}
        setSelectedOption={setSelectedOption}
      />
      {(loading || !popularGames || !newGames || !upcomingGames) && (
        <div className="bg-blue-200 flex justify-center p-8">
          <CircularProgress value={20} />
        </div>
      )}
      <GameList>
        {selectedOption === "Popular" && (
          <>
            <Games>
              {popularGames.map((popularGame) => (
                <Game key={popularGame.id} gameData={popularGame} />
              ))}
            </Games>
          </>
        )}

        {selectedOption === "Upcoming" && (
          <>
            <Games>
              {upcomingGames.map((upcomingGame) => (
                <Game key={upcomingGame.id} gameData={upcomingGame} />
              ))}
            </Games>
          </>
        )}

        {selectedOption === "Latest Released" && (
          <>
            <Games>
              {newGames.map((newGame) => (
                <Game key={newGame.id} gameData={newGame} />
              ))}
            </Games>
          </>
        )}
      </GameList>
      <Footer />
    </>
  );
};

const GameList = styled(motion.div)`
  background-color: rgba(191, 219, 254);
  padding: 0rem 5rem;
  padding-bottom: 4rem;
  padding-top: 4rem;
  h2 {
    padding: 2rem 0rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  h3 {
    align-content: center;
  }

  @media (max-width: 818px) {
    h2 {
      padding: 2.5rem 0rem;
      font-size: 2rem;
      text-align: center;
    }
  }
  @media (max-width: 500px) {
    padding: 0rem 2rem;
    h2 {
      padding: 2rem 0rem;
      font-size: 1.5rem;
    }
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  animation: fadein 1.5s;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default Home;
