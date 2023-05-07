import React from "react";
import { useState } from "react";
import "./Registration.css";
import { createUserWithEmailAndPassword } from "../../FirebaseAuth/auth";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  function validatePassword() {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    const isValidPassword = passwordRegex.test(formData.password);
    if (!isValidPassword) {
      setPasswordErrorMessage(
        "Password must contain 8-20 characters, two or more numbers, upper case letter and lower case letter"
      );
    } else {
      setPasswordErrorMessage("");
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    if (passwordErrorMessage === "") {
      const userData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      };
      const result = await createUserWithEmailAndPassword(
        formData.email,
        formData.password,
        userData
      );
      if (result.success) {
        // Clear the form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      }
    }
  };

  const onInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
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
            required
          />
        </div>
        {passwordErrorMessage && (
          <div className="form-error">{passwordErrorMessage}</div>
        )}
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
          <p className="password-requirement">Password must contain</p>
          <div className="password-requirements">
            <div className="password-requirements-column">
              <ul>
                <li>8-20 characters</li>
                <li>Two or more numbers</li>
              </ul>
            </div>
            <div className="password-requirements-column">
              <ul>
                <li>One uppercase letter</li>
                <li>One lowercase letter</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Sign Up</button>
        </div>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </form>
  );
}
