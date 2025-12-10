import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h2>Aabid.dev</h2>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
