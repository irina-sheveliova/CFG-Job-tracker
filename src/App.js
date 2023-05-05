import Nav from "./components/Navigation/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import RegistrationPage from "./pages/RegistrationPage";
import jobflowlogo from './jobflowlogo.jpg';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <header className="App-header">
                <img src={jobflowlogo} className="App-logo" alt="logo" />
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

