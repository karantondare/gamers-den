const initialState = {
  game: {},
  screenshots: {},
};

const gameDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAME_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshots: action.payload.screenshots,
      };
    default: {
      return { ...state };
    }
  }
};

export default gameDetailsReducer;
