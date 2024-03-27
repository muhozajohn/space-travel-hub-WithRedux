import React, { useState } from "react";
import { Link } from "react-router-dom";
import Switch from "react-switch";

const Navbar = ({ changeBg , styles }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    changeBg(checked);
  };

  return (
    <div className={` ${styles} fixed top-0 left-0 w-full z-50 h-16 bg-slate-400 flex items-center`}>
      <div className="container w-5/6 md:w-2/3 mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className=" text-nowrap capitalize ">Space travel hub</h1>
        </Link>
        <div className="flex items-center">
          <Switch onChange={() => handleChange()} checked={checked} />
        </div>
        <ul className="flex gap-2 items-center">
          <Link to="/mission" className=" text-nowrap capitalize ">
            <li>Missions</li>
          </Link>
          <Link to="/" className=" text-nowrap capitalize ">
            <li>Rockets</li>
          </Link>
          <Link to="/profile" className=" text-nowrap capitalize ">
            <li>| Profile</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
