import React from 'react';
import './About.css';


function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="about-text">Welcome to JobFlow, a comprehensive job application tracking platform designed to help you stay organized 
        and efficient throughout your job search. Our mission is to simplify the job application process and provide
         job seekers with a user-friendly and intuitive tool to manage their applications from start to finish. With 
         JobFlow, you can easily track the status of each application, set reminders for follow-ups, and keep notes 
         on your progress. Our goal is to make your job search stress-free and successful. We understand that finding
          the right job can be challenging, but with JobFlow, we aim to simplify the process and help you find your 
          dream job. Join the JobFlow community today and take control of your job search!</p>

      <div className="why-helpful">
        <h2>Why is this helpful?</h2>
        <p className="why-text">Looking for a job can be overwhelming, especially when you're juggling multiple applications 
        at once. With JobFlow, you can keep all your applications in one place, and easily track your progress. 
        Our status updates and notes features also help you stay on top of your job search, making sure that no 
        opportunity falls through the cracks. Plus, our platform is free to use, so you can focus on what 
        matters most - finding your dream job!</p>
      </div>

      <div className="future-features">
        <h2>Future Features</h2>
        <p className="future-text">We are constantly working on new features to enhance your experience with JobFlow. Here's a roadmap of what we have planned:</p>
        <div className="roadmap">
          <div>
            <h4>Integration with Job Boards</h4>
            <p>Search for job openings directly within JobFlow</p>
          </div>
          <div className="arrow">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div>
            <h4>Email Notifications</h4>
            <p>Get notified when employers view your application or when it's time to follow up</p>
          </div>
          <div className="arrow">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div>
            <h4>Application Insights</h4>
            <p>Track metrics such as application success rate and time to hire</p>
          </div>
          <div className="arrow">
            <i className="fas fa-chevron-right"></i>
          </div>
          <div>
            <h4>Customizable Dashboard</h4>
            <p>Personalize your JobFlow dashboard to fit your unique needs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

