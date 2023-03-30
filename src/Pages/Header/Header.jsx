import React from "react";
import logo from "../images/LOGO.png";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="cursor-pointer normal-case font-bold text-3xl">
          idea Cafe
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control"></div>
        <div className="dropdown dropdown-end">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={logo} />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
