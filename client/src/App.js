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
import JobsIndex from "./components/JobApplications/JobsIndex";
import Counter from "./components/Counter/counter";
import HowitWorks from "./components/HowitWorks/Howitworks";
import Login from "./components/Login/Login";
import JobDetailsPage from "./pages/JobDetailsPage";
import TeamIntro from "./components/TeamIntro/TeamIntro";
import Search from "./components/JobSearch/search";
import { FirebaseProvider } from "./context/authContext";

function App() {
  return (
    <Router>
      <div>
        <div className="counter-container">
          <h1 className="counter-heading">
            Join <Counter end={100000} duration={20} /> Users Tracking with Job
            Flow!
          </h1>
        </div>
        <FirebaseProvider>
          <Nav />
        </FirebaseProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/Applications"
            element={
              <FirebaseProvider>
                <JobsIndex />
              </FirebaseProvider>
            }
          />
          <Route path="/HowitWorks" element={<HowitWorks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/team-intro" element={<TeamIntro />} />
          <Route path="/Applications/:id" element={<JobDetailsPage />} />
          <Route path="/job-search" element={<Search />} />
        </Routes>
        <div className="footer">
          <p className="footer-text" style={{ marginLeft: "20px" }}>
            Copyright JobFlow.com{" "}
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;
