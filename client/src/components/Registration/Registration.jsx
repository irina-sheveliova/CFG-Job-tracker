import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registration.css';
import { createUserWithEmailAndPassword } from '../../FirebaseAuth/auth';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');

  function validatePassword() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    const isValidPassword = passwordRegex.test(formData.password);
    if (!isValidPassword) {
      setPasswordErrorMessage(
        'Password must contain 8-20 characters, two or more numbers, upper case letter and lower case letter'
      );
    } else {
      setPasswordErrorMessage('');
    }
  }

  function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);
    if (!isValidEmail) {
      setEmailErrorMessage('Please enter a valid email address');
    } else {
      setEmailErrorMessage('');
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    validatePassword();
    validateEmail();
    if (!passwordErrorMessage && !emailErrorMessage) {
      console.log('Form submitted:', formData);
      navigate('/');
    }

    if (passwordErrorMessage === '') {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };

      try {
        const result = await createUserWithEmailAndPassword(
          formData.email,
          formData.password,
          userData
        );

        if (result.success) {
          // User created successfully using Firebase Authentication
          // Now, send the user data to your backend API

          const response = await axios.post(
            'http://localhost:8080/users',
            userData
          );
          console.log('User created:', response.data);

          // Clear the form data
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          });
        } else {
          // Handle unsuccessful user creation using Firebase Authentication
          console.error('Error creating user:', result.error);
          // Display an error message or handle the error accordingly
        }
      } catch (error) {
        console.error('Error creating user:', error);
        // Handle error accordingly
      }
    }
  };

  const onInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        <h2 className="signup-form-header">Create Your Account</h2>
        <h5 className="signup-form-text">Organize your job search!</h5>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={onInputChange}
            onBlur={validateEmail}
            required
          />
          {emailErrorMessage && (
            <div className="form-error">{emailErrorMessage}</div>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={onInputChange}
            onBlur={validatePassword}
            required
          />

          {passwordErrorMessage && (
            <div className="form-error">{passwordErrorMessage}</div>
          )}
        </div>
        <div className="form-group">
          <button type="submit" style={{ width: '100%' }}>
            Sign Up
          </button>
        </div>
        <p style={{ textAlign: 'center', fontSize: '18px' }}>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </form>
  );
}
