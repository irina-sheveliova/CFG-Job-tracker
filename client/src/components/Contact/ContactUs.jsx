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
      fetch('http://localhost:8080/api/contactus', {
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
    <form className="contact-form">
      <div className="form-container">
        <h2 className="contact-header">Contact Us</h2>
        <h5 className="contact-form-text">
          If you have any questions, feel free to get in touch!
        </h5>

        <div className="div-section">
          <label htmlFor="Name">Full Name</label>
          <input
            id="fullName"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
          />

          {errors.name && (
            <p style={{ color: 'red', fontSize: '13px' }}>{errors.name}</p>
          )}
        </div>
        <div className="div-section">
          <label htmlFor="emailAddress">Email Address</label>

          <input
            id="emailAddress"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p style={{ color: 'red', fontSize: '13px' }}>{errors.email}</p>
          )}
        </div>
        <div className="div-section">
          <label htmlFor="message">Message</label>
          <textarea
            id="contactUsMessage"
            name="message"
            type="text"
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && (
            <p style={{ color: 'red', fontSize: '13px' }}>{errors.message}</p>
          )}
        </div>
        <div className="button-container">
          <button className="button" type="submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactUs;
