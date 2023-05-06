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
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/HowitWorks">How it Works</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/Contactus">Contact Us</Link>
        </li>
          <Link to="/signup">Sign Up</Link>
          <li>
           <button className="login-btn my-btn">Login</button>
          </li>
          <li>
          <button className="logout-btn my-btn">Logout</button>
          </li>
      </ul>
    </nav>
  );
}
export default Nav;