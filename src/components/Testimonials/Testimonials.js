import './Testimonial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-header">Our Testimonials</h2>
      <div className="testimonials">
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-text">
              "Job Flow helped me stay organized and focused during my job search. The platform is easy to use and has all the features I needed to keep track of my applications and interviews."
            </div>
            <div className="testimonial-name">
              - Paulina Bridges
            </div>
            <div className="testimonial-stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-text">
              "I was struggling to keep track of all my job applications and interviews, but Job Flow made it easy. The platform is intuitive and user-friendly, and it helped me stay on top of everything."
            </div>
            <div className="testimonial-name">
              - Omari Jenkins
            </div>
            <div className="testimonial-stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-content">
            <div className="testimonial-text">
              "As someone who was new to the job market, Job Flow was an invaluable resource. It helped me stay on top of my applications and gave me the confidence I needed to succeed."
            </div>
            <div className="testimonial-name">
              - Emily Whitehall
            </div>
            <div className="testimonial-stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

