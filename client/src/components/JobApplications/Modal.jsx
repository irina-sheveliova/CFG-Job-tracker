import React from 'react'
import "./Modal.css";
import { useState } from 'react';

function Modal({ closeModal, addJob }) {

    //setting state for errors
    const [errors, setErrors] = useState({})

    const [jobForm, setJobForm] = useState({
        position: "",
        company: "",
        doa: "",
        status: "",
        salary: "",
        notes: " "
    })

    const handleFormChange = (e) => {
        setJobForm({
            ...jobForm,
            [e.target.name]: e.target.value

        })
        console.log("form changed")
    }

    const formValidation = () => {
        if (jobForm.position && jobForm.company && jobForm.doa && jobForm.status) {
            setErrors("");
            console.log("form is valid")
            return true
        }
        else {
            console.log("form is invalid")
            return false;
        }
    };




    const handleSubmit = (e) => {
        e.preventDefault()
        //if form validation returns false, then 
        if (!formValidation()) {
            return
        }

        //addJob function (passed in as a prop) which adds a new row to the table
        addJob(jobForm)
        closeModal()
    }


    return (
        // <h1> Adding a New Job </h1>
        <div className="m-container" onClick={
            (e) => {
                if (e.target.className === "m-container")
                    closeModal();
            }}
        >
            <div className="modal">

                <form>
                    <div className="main-div" >
                        <div className="form-div" >
                            <label htmlFor="position">Job Position</label>
                            <input type="text" name="position" value={jobForm.position} onChange={handleFormChange} />
                        </div>
                        <div className="form-div">
                            <label htmlFor="company"> Company</label>
                            <input type="text" name="company" value={jobForm.company} onChange={handleFormChange} />
                        </div>
                        <div className="form-div">
                            <label htmlFor="doa"> Date of Application</label>
                            <input type="date" name="doa" value={jobForm.doa} onChange={handleFormChange} />
                        </div>

                        <div className="form-div">
                            <label htmlFor="status"> Status</label>

                            <select name="status" value={setJobForm.status} onChange={handleFormChange}>
                                <option value="applied">Applied</option>
                                <option value="no-applied">Not Applied</option>
                                <option value="interviewing">Interviewing</option>
                                <option value="offer">Offer</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                        <div className="form-div">
                            <label htmlFor="salary"> Salary</label>
                            <input name="salary" value={jobForm.salary} onChange={handleFormChange} />
                        </div>
                        <div className="form-div">

                            <label htmlFor="notes"> Notes</label>
                            <textarea id="notes" type="text" name="notes" value={jobForm.notes} onChange={handleFormChange}></textarea>
                        </div>
                        <button className="modal-button" type="submit" onClick={handleSubmit}>Enter</button>
                    </div>
                </form>
            </div>
        </div>

    )
};

export default Modal;