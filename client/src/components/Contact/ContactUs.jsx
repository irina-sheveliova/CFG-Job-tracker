import './ContactUs.css';
import { useState } from 'react';
import Validation from './Validation';

function ContactUs() {
  // setting state for form fields
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  //setting state for errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //function which runs on submit and performs validations
  const handleSubmit = (e) => {
    //preventing default behaviour of the form which would reload the page
    e.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);

    // if there are no errors AND the fields aren't blank AND email is valid
    // then we can add a submitted alert
    if (
      Object.keys(validationErrors).length === 0 &&
      values.name !== '' &&
      values.email !== '' &&
      values.message !== ''
    ) {
      fetch('/api/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert('Form Submitted!');
          setValues({
            name: '',
            email: '',
            message: '',
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <form className="form">
      <div className="form-container">
        <h2 className="form-header">Contact Us</h2>
        <h5 className="contact-form-text">
          If you have any questions, feel free to get in touch!
        </h5>

        <div className="form-group">
          <label htmlFor="Name">Full Name</label>
          <input
            id="fullName"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />

          {errors.name && (
            <div className="form-error">{errors.name}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="emailAddress">Email Address</label>

          <input
            id="emailAddress"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="form-error">{errors.email}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="contactUsMessage"
            name="message"
            type="text"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && (
            <div className="form-error">{errors.message}</div>
          )}
        </div>
        <div className="form-group">
          <button className="button" type="submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactUs;
