import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "../About/About";
import RegistrationPage from "../Registration/Registration";
import ContactUs from "../Contact/ContactUs";
import Landpge from "../../Landpge.png";
import "./homepage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import Testimonials from "../Testimonials/Testimonials";

function HomePage() {
  const [count, setCount] = useState(10000);
  const navigate = useNavigate();

  useEffect(() => {
    if (count < 100000) {
      setTimeout(() => setCount(count + 1), 10);
    }
  }, [count]);

  const [boxState, setBoxState] = useState([false, false, false, false, false]);

  const toggleBox = (index) => {
    const newBoxState = boxState.map((state, i) =>
      i === index ? !state : false
    );
    setBoxState(newBoxState);
  };

  const signup = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div className="button-container">
        <button className="get-started-button wide-button" onClick={signup}>
          Get Started For Free!
        </button>
      </div>
      <div className="landing-page">
        <div className="landing-pic-container">
          <img src={Landpge} alt="Landing page" className="landingpic" />
        </div>
        <div className="landing-page__content"></div>
        <div className="expandable-box-container">
          <div className="expandable-box" onClick={() => toggleBox(0)}>
            <div className="box-header">
              <i className="fas fa-briefcase"></i>
              <h2 className="box-title"> Track Your Job Applications</h2>
            </div>
            <div className={boxState[0] ? "box-content show" : "box-content"}>
              <p>
                Say goodbye to scattered notes and endless spreadsheets. Our job
                search platform provides a centralized hub for you to keep track
                of all your job applications effortlessly. Stay organized, stay
                on top of your game. Track application statuses
                and never miss an important deadline. Our
                intuitive interface makes it simple to manage multiple
                applications simultaneously, allowing you to focus on what
                matters most: landing your dream job.{" "}
              </p>
            </div>
          </div>
          <div className="expandable-box" onClick={() => toggleBox(1)}>
            <div className="box-header">
              <i className="fas fa-clipboard-list"></i>
              <h2 className="box-title">Search For Live Jobs</h2>
            </div>
            <div className={boxState[1] ? "box-content show" : "box-content"}>
              <p>
                Find your dream job in seconds with our powerful job search
                platform. Uncover endless opportunities, explore top companies,
                and discover the perfect match for your skills and aspirations.
                Explore top companies, dive into detailed job descriptions, and
                uncover valuable insights to make informed decisions. From
                remote work options to competitive compensation packages, we've
                got you covered.{" "}
              </p>
            </div>
          </div>
          <div className="expandable-box" onClick={() => toggleBox(2)}>
            <div className="box-header">
              <i className="fas fa-check-square"></i>
              <h2 className="box-title"> Why is JobFlow Good For Job Seekers? </h2>
            </div>
            <div className={boxState[2] ? "box-content show" : "box-content"}>
              <p>
                JobFlow is a powerful platform that empowers job seekers with efficient job tracking and
                search tools. With JobFlow, you can easily track your job applications, stay organized,
                and never miss an opportunity. The comprehensive job search feature enables you to explore
                a wide range of job openings, refine your search based on your preferences, and discover
                the perfect fit. JobFlow simplifies your job search journey, saving you time and helping
                you find meaningful employment that aligns with your skills and career goals.
              </p>{" "}
            </div>
          </div>
          <div className="expandable-box" onClick={() => toggleBox(3)}>
            <div className="box-header">
              <i className="fas fa-graduation-cap"></i>
              <h2 className="box-title">How does JobFlow benefit the Recruitment Industry?</h2>
            </div>
            <div className={boxState[3] ? "box-content show" : "box-content"}>
              <p>

                JobFlow offers a unique advantage to recruiters by fostering a community of prepared and
                engaged candidates. When job seekers utilize JobFlow's comprehensive search features to
                find relevant job opportunities, they also gain access to a wealth of resources and tools
                to enhance their job search. By encouraging candidates to sign up for JobFlow, recruiters
                can tap into a pool of motivated individuals who are actively seeking career advancement.
                With JobFlow, recruiters can attract candidates who are better prepared, well-informed
                about the industry, and ready to make a positive impact from day one. {" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default HomePage;
