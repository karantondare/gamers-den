import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGames } from "../actions/gamesActions";
import logo from "../assets/logo.svg";

const Navbar = ({ selectedOption, updateSelectedOption }) => {
  const options = ["Popular", "Latest Released", "Upcoming"];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className="flex justify-around p-4 bg-blue-300">
      <Link to="/" onClick={() => updateSelectedOption("Popular")}>
        <img className="h-20" src={logo} alt="logo" />
      </Link>

      <ul className="navbar flex ">
        {options.map((option, index) => (
          <li key={index} className=" text-2xl m-2">
            <button
              className="nav-button p-4 bg-primary text-white rounded-lg focus:outline-none"
              style={
                option === selectedOption
                  ? { color: " rgba(147, 197, 253" }
                  : null
              }
              onClick={() => updateSelectedOption(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;