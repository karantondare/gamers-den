import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGames } from "../actions/gamesActions";
import logo from "../assets/logo.svg";

const Navbar = ({ selectedOption, setSelectedOption }) => {
  const options = ["Popular", "Latest Released", "Upcoming"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  // function updateSelectedOption(option) {
  //   setSelectedOption(option);
  // }

  return (
    <div className="px-8 flex justify-between p-4 bg-blue-300">
      <Link to="/">
        <img className="h-20" src={logo} alt="logo" />
      </Link>

      <ul className="navbar flex ">
        {options.map((option) => (
          <Link to="/" key={option}>
            <li className=" text-2xl m-2">
              <button
                className="nav-button p-4 bg-primary text-white rounded-lg focus:outline-none"
                style={
                  option === selectedOption
                    ? { color: " rgba(147, 197, 253" }
                    : null
                }
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </button>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
