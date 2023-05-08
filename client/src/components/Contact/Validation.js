// function using regex to check whether the email address entered is valid
// returns true if valid
const isEmailValid = (email) => {
    return /\S+@\S+\.\S+/.test(email);
}

const Validation = (values) => {
    let errors = {}

    if (!values.name) {
        errors.name = "Name is Required"
    }
    else if (values.name.length < 4) {
        errors.name = "Name must be more than 4 characters "
    }
    if (!values.email) {
        errors.email = "Email is Required"
    }
    else if (!isEmailValid(values.email))
        errors.email = "Email is invalid"

    if (!values.message) {
        errors.message = "Message is Required"
    }

    else if (values.message.length < 8) {
        errors.message = "Message must be at least 8 characters"
    }

    //returns an object
    return errors;

}



export default Validation;