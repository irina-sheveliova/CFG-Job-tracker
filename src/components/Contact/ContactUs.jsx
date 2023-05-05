import './ContactUs.css';
import { useState } from "react";
import { Link } from 'react-router-dom';


function ContactUs() {


    //setting state for the contact form
    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [message, setMessage] = useState('')


    // function using regex to check whether the email address entered is valid
    // returns true if valid
    const isEmailValid = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }

    //function to submit contact form
    const handleSubmit = (e) => {
        //preventing default behaviour of the form which would reload the page
        e.preventDefault();

        if (!isEmailValid(emailAddress)) {
            console.log("Email address is incorrect")
        }
        if (fullName.trim().length === 0) {
            console.log("Full Name cannot be empty!")
        }
        if (message.trim().length === 0) {
            console.log("Message cannot be empty!")
        }
        else {
            alert("Form successfully submitted")
        }
    }

    return (

        <form className="contact-form">
            <div className='form-container'>
                <h2 className="contact-header" >Contact</h2>
                <h5 className="contact-form-text">If you have any questions, feel free to get in touch!</h5>

                <div className="div-section">
                    <label htmlFor="Name">Full Name</label>
                    <input id="fullName" name="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="div-section">
                    <label htmlFor="emailAddress">Email Address</label>
                    <input id="emailAddress" name="emailAddress" type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                </div>
                <div className="div-section">
                    <label htmlFor="message">Message</label>
                    <textarea id="contactUsMessage" name="contactUsMessage" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <p className="button-container">
                    <button className="button" type="submit" onClick={handleSubmit}>
                        Send
                    </button>
                </p>
                {/* <Link to="/">
                    <button
                        className="button button-secondary"
                    >
                        Cancel
                    </button>
                </Link> */}
            </div>
        </form>


    )
}

export default ContactUs;