import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api/api";

export const fetchGames = () => async (dispatch) => {
  const popularGamesData = await axios.get(popularGamesURL());
  const upcominnGamesData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularGamesData.data.results,
      newGames: upcominnGamesData.data.results,
      upcomingGames: newGamesData.data.results,
    },
  });
};
