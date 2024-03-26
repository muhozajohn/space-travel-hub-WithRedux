import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="p-4 bg-slate-400">
      <div className="container w-2/3 mx-auto flex justify-between items-center ">
        <Link to="/">
          <h1 className=" capitalize ">Space travel hub</h1>
        </Link>
        <ul className="flex gap-2 items-center">
          <NavLink to="/mission">
            <li>Missions</li>
          </NavLink>
          <NavLink to="/">
            <li>Rockets</li>
          </NavLink>
          <NavLink to="/profile">
            <li>Profile</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
