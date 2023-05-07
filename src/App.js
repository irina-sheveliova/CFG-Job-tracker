import React from "react";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import RegistrationPage from "./pages/RegistrationPage";
import ContactUs from "./components/Contact/ContactUs";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import HomePage from "./components/Homepage/homepage";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <div className="footer">
          <p className="footer-text" style={{ marginLeft: "20px" }}>
            Copyright JobFlow.com{" "}
          </p>
          <button className="subscribe-button" style={{ marginRight: "20px" }}>
            Subscribe to mailing list
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;

