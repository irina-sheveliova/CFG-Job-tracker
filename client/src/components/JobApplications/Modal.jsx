import React from 'react'
import "./Modal.css"

function JobModal() {
    return (
        // <h1> Adding a New Job </h1>
        <div className="m-container">
            <div className="modal">

                <form>
                    <div className="main-div">
                        <div className="form-div">
                            <label htmlFor="job_position">Job Position</label>
                            <input type="text" name="job_position" />
                        </div>
                        <div className="form-div">
                            <label htmlFor="company"> Company</label>
                            <input type="text" name="company" />
                        </div>
                        <div className="form-div">
                            <label htmlFor="doa"> Date of Application</label>
                            <input type="date" name="doa" />
                        </div>

                        <div className="form-div">
                            <label htmlFor="status"> Status</label>
                            {/* <input name="status" /> */}
                            <select name="status">
                                <option value="applied">Applied</option>
                                <option value="no-applied">Not Applied</option>
                                <option value="interviewing">Interviewing</option>
                                <option value="offer">Offer</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div>
                        <div className="form-div">
                            <label htmlFor="salary"> Salary</label>
                            <input name="salary" />
                        </div>
                        <div className="form-div">

                            <label htmlFor="notes"> Notes</label>
                            <textarea id="notes" type="text" name="notes"></textarea>
                        </div>
                        <button className="modal-button" type="submit">Enter</button>
                    </div>
                </form>
            </div>
        </div>

    )
};

export default JobModal;