import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <Link to="/signin" className="nav-link">
        Sign Out
      </Link>
      <Link to="/signin" className="nav-link">
        Sign In
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
    </>
  );
};

export default NavItems;
