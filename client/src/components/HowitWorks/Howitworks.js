import './Howitworks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="step-box">
        <h3>Step 1: Login or Sign Up</h3>
        <p>In order to access the features and benefits of JobFlow, you must first create a new account or
          log in to an existing one. This step is necessary to ensure the security and privacy of your job
          application information, as well as to enable you to take full advantage of the platform's
          capabilities. The account creation process is quick and easy, and once completed, you will have
          access to a range of tools and resources that can help streamline your job search process.</p>
      </div>
      <div className="step-box">
        <h3>Step 2: Navigate to the Applications Page</h3>
        <p>Upon successfully logging in, you will be directed to your personalized applications page. From
          here, you can begin adding job applications to your account. The applications page serves as a
          central hub for managing your job search, allowing you to easily track your progress and stay
          organized.</p>
      </div>
      <div className="step-box">
        <h3>Step 3: Start Adding Jobs</h3>
        <p>To input your Job title, Company name, and any additional notes, click on "Add a Job" button.
          It is important to note that adding detailed notes can provide a significant advantage when
          keeping track of job applications. These notes can serve as a reminder of important details and
          help you prepare for future interviews or interactions with potential employers.</p>
      </div>
      <div className="step-box">
        <h3>Step 4: Organize Your Jobs</h3>
        <p>As you move through the application process, you may find it helpful to organize your job
          applications by their current status. This allows you to keep track of your progress and prioritize
          your efforts accordingly. If you make a mistake or need to update your information, you can use
          the <FontAwesomeIcon icon={faTrashAlt} /> icon to delete a job card or
          the <FontAwesomeIcon icon={faPencilAlt} /> icon to edit it. This feature provides flexibility and
          ensures that your job application information is always up-to-date and accurate.</p>
      </div>
      <div className="faq-box">
        <h2>Frequently Asked Questions</h2>
        <p><strong>Is JobFlow free to use?</strong> Yes, we believe that everyone should have access to tools
          that can help them manage their job search effectively. That's why we've made JobFlow completely free
          to use. All you need to do is sign up for an account to access all of the features we offer.</p>
        <p><strong>Can I delete jobs from my JobFlow?</strong> Yes, you can delete jobs from your JobFlow by
          clicking on the job and selecting the "delete" option.</p>
        <p><strong>Can I track multiple job applications for the same company?</strong> Yes, you can add multiple
          job applications for the same company by clicking on the "Add a Job" button and filling out the form with 
          the relevant information.</p>
        <p><strong> Can I share my JobFlow with others? </strong> Not currently, but we are working on adding this
          feature in the future.</p>
        <p><strong>Can I export my JobFlow data?</strong> Currently, exporting JobFlow data is not possible.
          However, we understand that this feature would be useful for many users, and we're actively working on
          implementing it in a future update. Stay tuned for more information on this!</p>
        <p><strong>How can I contact customer support?</strong> You can visit our <a href="http://localhost:3000/contactus">
          Contact Us</a> page to fill out a form and we'll get back to you as soon as possible.</p>
      </div>
    </div>
  );
};

export default HowItWorks;

