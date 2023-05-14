import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function SignUpForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const navigate = useNavigate();

  const errors = {
    emailInUse: "User with this email already exists"
  };

  // This function is deprecated as password is being validated by type="password" + pattern in input form
  // function validatePassword() {
  //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
  //   const isValidPassword = passwordRegex.test(password);
  //   if (!isValidPassword) {
  //     setPasswordErrorMessage(
  //       "Password must contain 8-20 characters, two or more numbers, upper case letter and lower case letter"
  //     );
  //   } else {
  //     setPasswordErrorMessage("");
  //   }
  // }

  // This function is deprecated as email is being validated by type="email" in input form
  // function validateEmail() {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   const isValidEmail = emailRegex.test(email);
  //   if (!isValidEmail) {
  //     setEmailErrorMessage("Please enter a valid email address");
  //   } else {
  //     setEmailErrorMessage("");
  //   }
  // }

  const onSubmit = async (event) => {
    event.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User created 
        const user = userCredential.user;
        console.log(user);
        navigate("/login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/email-already-in-use') {
          // Email already in use
          setErrorMessages({ name: "emailInUse", message: errors.emailInUse });
        } 
        else {
          alert(errorMessage);
        }
        console.log(errorCode, errorMessage)
      });
  }

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="form-error">{errorMessages.message}</div>
    );

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
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          {renderErrorMessage("emailInUse")}
        </div>
        <div className="form-group">
          <input
            type="password"
            pattern=".{8,}"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <p style={{fontStyle: "italic", color: "coral", marginBlockStart: "0px"}}>
            Password must contain at least 8 characters</p>
        </div>
        <div className="form-group">
          <button type="submit" style={{ width: "100%" }}>
            Sign Up
          </button>
        </div>
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </form>
  );
}
