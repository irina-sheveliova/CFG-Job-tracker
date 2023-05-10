import './Howitworks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="step-box">
        <h3>Step 1: Login or Sign Up</h3>
        <p>In order to access the features and benefits of Job Flow, you must first create a new account or log in to an existing one. This step is necessary to ensure the security and privacy of your job application information, as well as to enable you to take full advantage of the platform's capabilities. The account creation process is quick and easy, and once completed, you will have access to a range of tools and resources that can help streamline your job search process.</p>
      </div>
      <div className="step-box">
        <h3>Step 2: Navigate to the Applications Page</h3>
        <p>Upon successfully logging in, you will be directed to your personalized applications page. From here, you can begin adding job applications to your account. The applications page serves as a central hub for managing your job search, allowing you to easily track your progress and stay organized.</p>
      </div>
      <div className="step-box">
        <h3>Step 3: Start Adding Jobs</h3>
        <p>To input your Job title, Company name, and any additional notes, click on the <FontAwesomeIcon icon={faPencilAlt} /> icon. It is important to note that adding detailed notes can provide a significant advantage when keeping track of job applications. These notes can serve as a reminder of important details and help you prepare for future interviews or interactions with potential employers.</p>
      </div>
      <div className="step-box">
        <h3>Step 4: Organize Your Jobs</h3>
        <p>As you move through the application process, you may find it helpful to organize your job applications by their current status. With our drag-and-drop feature, you can easily move job cards between sections such as "Applied," "Interviewing," and "Offer Received." This allows you to keep track of your progress and prioritize your efforts accordingly.
        If you make a mistake or need to update your information, you can use the <FontAwesomeIcon icon={faTrashAlt} /> icon to delete a job card or the <FontAwesomeIcon icon={faPencilAlt} /> icon to edit it. This feature provides flexibility and ensures that your job application information is always up-to-date and accurate.</p>
      </div>
      <div className="faq-box">
        <h2>Frequently Asked Questions</h2>
        <p><strong>How many jobs can I have on my applications page in total?</strong> You can have 50 items on your board in total and a maximum of 10 items per column.</p>
        <p><strong>Is Job flow free to use?</strong> Yes, we believe that everyone should have access to tools that can help them manage their job search effectively. That's why we've made Job flow completely free to use. All you need to do is sign up for an account to access all of the features we offer.</p>
        <p><strong>How do I change my password?</strong> You can change your password by going to your account settings and clicking on the "Change Password" button. If you have any issues, please contact support at support@jobflow.com.</p>
        <p><strong>Can I delete jobs from my job flow?</strong> Yes, you can delete jobs from your job flow by clicking on the job and selecting the "delete" option.</p>
        <p><strong>Can I track multiple job applications for the same company?</strong> Yes, you can add multiple job applications for the same company by clicking on the "add job" button and filling out the form with the relevant information.</p>
        <p><strong>Is my job flow data secure? </strong> Yes, we take the security and privacy of your data very seriously. All data is encrypted and stored securely on our servers..</p>
        <p><strong> Can I share my job flow with others? </strong> Not currently, but we are working on adding this feature in the future.</p>
        <p><strong>Can I export my job flow data?</strong> Currently, exporting job flow data is not possible. However, we understand that this feature would be useful for many users, and we're actively working on implementing it in a future update. Stay tuned for more information on this!.</p>
        <p><strong>How can I contact customer support?</strong> You can contact us by email at support@jobflow.com. We aim to respond to all inquiries within 72 hours, although it is usually sooner. You can also visit our Contact Us page at http://localhost:3000/Contactus to fill out a form and we'll get back to you as soon as possible.</p>

      </div>
    </div>
  );
};

export default HowItWorks;

