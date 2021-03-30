import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchGameDetails } from "../actions/gameDetialActions";
import starEmpty from "../assets/star-empty.png";
import starFull from "../assets/star-full.png";
import playstation from "../assets/playstation.svg";
import steam from "../assets/steam.svg";
import xbox from "../assets/xbox.svg";
import nintendo from "../assets/nintendo.svg";
import apple from "../assets/apple.svg";
import gamepad from "../assets/gamepad.svg";
import LinearProgress from "@material-ui/core/LinearProgress";

const GameDetail = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();
  const gameDetails = useSelector((state) => state.gameDetails.game);

  const func = async () => {
    await dispatch(fetchGameDetails(params.id));
    setLoading(false);
  };

  useEffect(() => {
    func();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStars = () => {
    const stars = [];
    const rating = Math.round(gameDetails.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };

  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4" || "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      <div>{loading && <LinearProgress color="secondary" />}</div>
      <div className="bg-blue-200">
        {!loading && (
          <div className="">
            <div className="flex justify-around items-center p-8">
              <h1 className="text-5xl	">{gameDetails.name}</h1>
              <div>
                <p className="text-2xl	">Rating: {gameDetails.rating}</p>
                <div className="flex justify-around items-center">
                  {getStars()}
                </div>
              </div>
            </div>
            <div className="flex flex-col	 justify-around items-center p-8">
              <img src={gameDetails.background_image} alt={gameDetails.name} />
              <p className="pt-8 w-10/12	content-start	">
                {gameDetails.description_raw}
              </p>
            </div>
            <div className="flex justify-center items-center pb-8">
              <p className="text-2xl">Available for: </p>
              {gameDetails.platforms.map((gameDetail) => (
                <img
                  className="p-4"
                  alt={gameDetail.platform.name}
                  key={gameDetail.platform.id}
                  src={getPlatform(gameDetail.platform.name)}
                ></img>
              ))}
            </div>
            <div className="flex justify-around items-center pb-8">
              <div>
                {gameDetails.publishers.map((publisher, index) => (
                  <h4 key={index} className="flex justify-center p-4 text-2xl">
                    Publisher : {publisher.name}
                  </h4>
                ))}
              </div>
              <div className="flex justify-center items-center">
                <p className="flex flex-col justify-center items-center  text-2xl text-black">
                  Genre :
                </p>
                {gameDetails.genres.map((publisher, index) => (
                  <span key={index} className="p-4 text-2xl">
                    {publisher.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GameDetail;
