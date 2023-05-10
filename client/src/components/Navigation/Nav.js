import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/team-intro">Team Intro</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/HowitWorks">How it Works</Link>
        </li>
        <li>
          <Link to="/Applications">Applications</Link>
        </li>
        <li>
          <Link to="/Contactus">Contact Us</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
