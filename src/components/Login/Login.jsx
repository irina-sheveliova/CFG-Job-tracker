import React from 'react';
import { useState } from 'react';
import './Login.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  // const database = [
  //   {
  //     username: 'user1@test.com',
  //     password: 'user1@test.com',
  //   },
  //   {
  //     username: 'user2@test.com',
  //     password: 'user2@test.com',
  //   },
  // ];

  const errors = {
    uname: 'Username not found',
    pass: 'Invalid password',
  };

  const onSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    const form = event.target;
    const email = form.uname.value;
    const password = form.pass.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setIsSubmitted(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        if (
          errorCode === 'auth/user-not-found' ||
          errorCode === 'auth/invalid-email'
        ) {
          setErrorMessages({ name: 'uname', message: errors.uname });
        } else if (errorCode === 'auth/wrong-password') {
          setErrorMessages({ name: 'pass', message: errors.pass });
        } else {
          setErrorMessages({ name: 'general', message: error.message });
        }
      });
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="form-error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        <h2 className="login-form-header">Log in</h2>
        <div className="form-group">
          <input type="email" name="uname" required placeholder="Email" />
          {renderErrorMessage('uname')}
        </div>
        <div className="form-group">
          <input type="password" name="pass" required placeholder="Password" />
          {renderErrorMessage('pass')}
        </div>
        <div className="button-container">
          <button type="submit">Continue</button>
        </div>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </form>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? (
          <h3 className="loginMessage">user logged in successfully</h3>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
