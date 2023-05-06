import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import RegistrationPage from "./pages/RegistrationPage";

import ContactUs from "./components/Contact/ContactUs";
import jobflowlogo from './jobflowlogo.jpg';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={
            <div className="landing-page">
              <div className="landing-page__content">
                <h5 className="landing-page__title">Job Flow</h5>
                <h3 className="landing-page__subtitle">Stay organised and track your job applications for free today</h3>
                <div className="landing-page__buttons">
                  <button className="landing-page__button">Login</button>
                  <button className="landing-page__button">Sign Up</button>
                </div>
              </div>
              <div className="logo">
                <img src={jobflowlogo} alt="Job Flow logo" />
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

