import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import { useAuth } from "../../context/authContext";
import { auth } from "../../firebase";

function Nav() {
  const { currentUser } = useAuth();
  const history = useNavigate();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        history("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
          <Link to="/job-search">Search for Jobs</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
        {currentUser ? (
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default Nav;
