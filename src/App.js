import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
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
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Welcome to JobFlow</h1>
                <h2>Sign up or Login to Start Tracking Your Jobs</h2>
                <button id="homepagebutton">Login or Sign up</button>
              </header>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<RegistrationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
