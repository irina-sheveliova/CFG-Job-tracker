import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../About/About';
import RegistrationPage from '../Registration/Registration';
import ContactUs from '../Contact/ContactUs';
import Landpge from '../../Landpge.png';
import './homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';
import Testimonials from '../Testimonials/Testimonials';

function HomePage() {
  const [count, setCount] = useState(10000);

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

  return (
    <div>
      <div className="button-container">
        <button className="get-started-button wide-button">
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
            <div className={boxState[0] ? 'box-content show' : 'box-content'}>
              <p>
              Say goodbye to scattered notes and endless spreadsheets. Our job search platform provides a centralized hub for you to keep track of all your job applications effortlessly. Stay organized, stay on top of your game.
              Track application statuses, set reminders for follow-ups, and never miss an important deadline. Our intuitive interface makes it simple to manage multiple applications simultaneously, allowing you to focus on what matters most: landing your dream job.{' '}
              </p>
            </div>
          </div>
          <div className="expandable-box" onClick={() => toggleBox(1)}>
            <div className="box-header">
              <i className="fas fa-clipboard-list"></i>
              <h2 className="box-title">Search For Live Jobs</h2>
            </div>
            <div className={boxState[1] ? 'box-content show' : 'box-content'}>
              <p>
              Find your dream job in seconds with our powerful job search platform. Uncover endless opportunities,
              explore top companies, and discover the perfect match for your skills and aspirations. Explore top companies, 
              dive into detailed job descriptions, and uncover valuable insights to make informed decisions. From remote work options to competitive compensation packages, we've got you covered.{' '}
              </p>
            </div>
          </div>
          <div className="expandable-box" onClick={() => toggleBox(2)}>
            <div className="box-header">
              <i className="fas fa-check-square"></i>
              <h2 className="box-title"> Interview Prep (Coming Soon) </h2>
            </div>
            <div className={boxState[2] ? 'box-content show' : 'box-content'}>
              <p>
                "Preparing for an interview? Our comprehensive interview prep
                resources will help you ace your next job interview. From common
                questions to tips and tricks for acing the interview, our
                community has everything you need to land your dream job. Join
                now and start preparing for success.
              </p>{' '}
            </div>
          </div>
          <div className="expandable-box" onClick={() => toggleBox(3)}>
            <div className="box-header">
              <i className="fas fa-graduation-cap"></i>
              <h2 className="box-title">Education (Coming Soon)</h2>
            </div>
            <div className={boxState[3] ? 'box-content show' : 'box-content'}>
              <p>
                Get ahead in your career with our education resources. From
                online courses to industry-specific certifications, we provide
                the tools you need to stay ahead of the game. Our community of
                learners will help you find the resources you need to take your
                skills to the next level{' '}
              </p>{' '}
            </div>
          </div>
          <div className="expandable-box" onClick={() => toggleBox(4)}>
            <div className="box-header">
              <i className="fas fa-users"></i>
              <h2 className="box-title"> Networking (Coming Soon) </h2>
            </div>
            <div className={boxState[4] ? 'box-content show' : 'box-content'}>
              <p>
                Join our job community and expand your professional network!
                Connect with like-minded individuals and discover new
                opportunities in your field. Sign up now to start building your
                career and unlocking exciting job prospects.{' '}
              </p>{' '}
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
