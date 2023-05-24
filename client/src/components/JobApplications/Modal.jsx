import React from 'react';
import './Modal.css';
import { useState } from 'react';
import moment from 'moment';
import { BsXCircle } from 'react-icons/bs';

function Modal({ closeModal, addJob, defaultValue }) {
  //setting state for form errors
  const [errors, setErrors] = useState('');

  // state is set to the default value if provided
  // but if it's null, we use our object
  const [jobForm, setJobForm] = useState(
    defaultValue || {
      position: '',
      company: '',
      doa: '',
      status: '',
      salary: '',
      notes: '',
    }
  );

  const currentDate = moment().format('YYYY-MM-DD');
  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name === 'doa' && moment(value).isAfter(currentDate, 'day')) {
      setJobForm({
        ...jobForm,
        doa: currentDate,
      });
    } else {
      setJobForm({
        ...jobForm,
        [name]: value,
      });
    }
  };

  //validation for the form
  const formValidation = () => {
    if (jobForm.position && jobForm.company && jobForm.status) {
      setErrors('');
      console.log('form is valid');
      return true;
    } else {
      // if the value doesn't exist, we want to push it into our errorItems array
      let errorItems = [];
      for (const [key, value] of Object.entries(jobForm)) {
        if (
          !value &&
          (key === 'position' || key === 'company' || key === 'status')
        ) {
          errorItems.push(key);
        }
      }
      setErrors(errorItems.join(', '));
      console.log('form is invalid');
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if form validation returns false then return, otherwise add as a new row
    if (!formValidation()) {
      return;
    }
    //addJob function (passed in as a prop) which adds a new row to the table
    addJob(jobForm);
    closeModal();
  };

  return (
    <div
      data-testid="m-container"
      className="m-container"
      // onClick={(e) => {
      //     if (e.target.className === "close") closeModal();
      // }}
    >
      <div className="modal">
        <form className="form-div">
          <div className="main-div">
            {/* <BsXCircle className="close" /> */}
            <BsXCircle
              data-testid="close-button"
              className="close"
              onClick={() => closeModal()}
            />
            <div className="form-div">
              <label htmlFor="position-input">
                Job Position <span className="required">(required)</span>
              </label>
              <input
                id="position-input"
                type="text"
                name="position"
                value={jobForm.position}
                onChange={handleFormChange}
              />
            </div>
            <div className="form-div">
              <label htmlFor="company-input">
                {' '}
                Company <span className="required">(required)</span>
              </label>
              <input
                id="company-input"
                type="text"
                name="company"
                value={jobForm.company}
                onChange={handleFormChange}
              />
            </div>
            <div className="form-div">
              <label htmlFor="status-input">
                {' '}
                Status <span className="required">(required)</span>
              </label>

              <select
                id="status-input"
                name="status"
                value={jobForm.status}
                onChange={handleFormChange}
              >
                <option>Please choose </option>
                <option value="applied">Applied</option>
                <option value="not-Applied">Not Applied</option>
                <option value="interviewing">Interviewing</option>
                <option value="offer">Offer</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="form-div">
              <label htmlFor="doa-input"> Date of Job Application</label>
              <input
                id="doa-input"
                type="date"
                name="doa"
                value={jobForm.doa}
                onChange={handleFormChange}
                max={currentDate}
              />
            </div>
            <div className="form-div">
              <label htmlFor="salary-input"> Salary</label>
              <input
                id="salary-input"
                name="salary"
                value={jobForm.salary}
                onChange={handleFormChange}
              />
            </div>
            <div className="form-div">
              <label htmlFor="notes-input-plus"> Notes</label>
              <textarea
                id="notes-input-plus"
                type="text"
                name="notes"
                value={jobForm.notes}
                onChange={handleFormChange}
              ></textarea>
            </div>
            {/* creating a new div if errors exist */}
            {errors && (
              <div className="form-errors">{`Please provide: ${errors}`}</div>
            )}
            <button id="modal-button" type="submit" onClick={handleSubmit}>
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Modal;
