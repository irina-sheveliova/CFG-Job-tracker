import React, { useState, useEffect } from "react";
import "./JobApplications.css";
import Modal from "./Modal";
import axios from 'axios';
// import { Fragment } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";


function JobApplications({ rows, deleteJob }) {

    // this function accepts the rows and deleteJob props from JobsIndex

    return (
        // <React.Fragment>
        <div className="table-container">
            <table className="applications_table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Job Position</th>
                        <th>Company</th>
                        <th>Date of Application</th>
                        <th>Salary</th>
                        <th>Status</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, idx) => {

                            // converts the first character of the status to uppercase
                            const statusUpper = row.status.charAt(0).toUpperCase() + row.status.slice(1);

                            return <tr key={idx}>
                                <td>{row.id}</td>
                                <td>{row.job_position}</td>
                                <td>{row.company}</td>
                                <td>{row.doa}</td>
                                <td>{row.salary}</td>
                                <td>
                                    <span className={`label label-${statusUpper}`}>
                                        {statusUpper}
                                    </span>
                                </td>
                                <td className="fill-out">{row.notes}</td>
                                <td>
                                    <span className="table-actions"><BsFillPencilFill className="edit-button" /><BsFillTrashFill
                                        className='delete-button'
                                        onClick={() => deleteJob(idx)} />
                                    </span>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>

        // </React.Fragment>
    );
};


export default JobApplications;