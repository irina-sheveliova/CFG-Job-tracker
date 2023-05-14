import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    userNotFound: "User not found",
    invalidPass: "Invalid password",
    invalidEmail: "Please enter a valid email address"
  };

  const onLogin = (event) => {
    //Prevent page reload
    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/applications")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          // Invalid password
          setErrorMessages({ name: "invalidPass", message: errors.invalidPass });
        } else if (errorCode === 'auth/user-not-found') {
          // User not found
          setErrorMessages({ name: "userNotFound", message: errors.userNotFound });
        } else if (errorCode === 'auth/invalid-email') {
          // Invalid email
          setErrorMessages({ name: "invalidEmail", message: errors.invalidEmail });
        }
        else {
          alert(errorMessage);
        }
        console.log(errorCode, errorMessage)
      });
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="form-error">{errorMessages.message}</div>
    );

  return (
    <form>
      <div className="form-container">
        <h2 className="login-form-header">Log in</h2>
        <div className="form-group">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          {renderErrorMessage("userNotFound")}
          {renderErrorMessage("invalidEmail")}
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          {renderErrorMessage("invalidPass")}
        </div>

        <div className="form-group">
          <button type="submit" style={{ width: "100%" }}
            onClick={onLogin}>Continue</button>
        </div>
        <p style={{ textAlign: "center", fontSize: "18px" }}>
          Don't have an account? <a href="/signup">Sign Up</a></p>

      </div>
    </form>
  );
}

export default Login;