//base url
const BASE_URL = "https://api.rawg.io/api/";

//dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDate = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const POPULAR_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=12`;
const UPCOMING_GAMES = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=12`;
const NEW_GAMES = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=12`;

//exports
export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`;
export const upcomingGamesURL = () => `${BASE_URL}${UPCOMING_GAMES}`;
export const newGamesURL = () => `${BASE_URL}${NEW_GAMES}`;

export const gameDetailsURL = (game_id) => `${BASE_URL}games/${game_id}`;
export const gameScreenshotURL = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots`;

//search game
export const searchGameURL = (game_name) =>
  `${BASE_URL}games?search=${game_name}&page_size=9`;
