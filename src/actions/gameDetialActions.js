import axios from "axios";
import { gameDetailsURL } from "../api/api";

export const fetchGameDetails = (id) => async (dispatch) => {
  const gameDetails = await axios.get(gameDetailsURL(id));
  // const gameScreenshots = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "FETCH_GAME_DETAILS",
    payload: {
      game: gameDetails.data,
      // screenshots: gameScreenshots.data,
    },
  });
};
