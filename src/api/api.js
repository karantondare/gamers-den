const BASE_URL = "https://api.rawg.io/api";
const API = "30adeac360134ff987ca67c2c32de0ea";

//dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const POPULAR_GAMES = `/games?key=${API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=15`;
const UPCOMING_GAMES = `/games?key=${API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=15`;
const NEW_GAMES = `/games?key=${API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=15`;

export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`;
export const upcomingGamesURL = () => `${BASE_URL}${UPCOMING_GAMES}`;
export const newGamesURL = () => `${BASE_URL}${NEW_GAMES}`;
