import React, { useState, useEffect } from "react";
import "./JobApplications.css";
import Modal from "./Modal";
import axios from 'axios';
// import { Fragment } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";


function JobApplications({ rows }) {

    // accepts the rows prop from JobsIndex

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
                            return <tr key={idx}>
                                <td>{row.id}</td>
                                <td>{row.job_position}</td>
                                <td>{row.company}</td>
                                <td>{row.doa}</td>
                                <td>{row.salary}</td>
                                <td>
                                    <span className={`label label-${row.status}`}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="fill-out">{row.notes}</td>
                                <td>
                                    <span className="table-actions"><BsFillPencilFill className="edit-button" /><BsFillTrashFill className='delete-button' />
                                    </span>
                                </td>
                            </tr>
                        })
                    }

                    {/* <tr>
                        <td>1 </td>
                        <td> Full Stack Developer </td>
                        <td> Google</td>

                        <td> 08/05/2023</td>
                        <td> 150k</td>
                        <td>
                            <span className="label label-applied"> Applied </span>
                        </td>
                        <td >
                            <span className="table-actions" ><BsFillPencilFill className="edit-button" /><BsFillTrashFill className='delete-button' />
                            </span>
                        </td>
                        <td> Really like the company culture</td>
                    </tr>

                    <tr>
                        <td>2 </td>
                        <td> Android Developer </td>
                        <td> Amazon</td>

                        <td> 01/05/2023</td>
                        <td> 120k</td>
                        <td>
                            <span className="label label-interviewing"> Interviewing </span>
                        </td>
                        <td>
                            <span className="table-actions">
                                <BsFillPencilFill className="edit-button" /> <BsFillTrashFill className='delete-button' /></span>
                        </td>
                        <td> First interview went well</td>
                    </tr>
                    <tr>
                        <td>3 </td>
                        <td> Front end developer </td>
                        <td> Asos</td>

                        <td> 20/04/2023</td>
                        <td> 90k</td>
                        <td>
                            <span className="label label-rejected"> Rejected </span>
                        </td>
                        <td>
                            <span className="table-actions"><BsFillPencilFill className="edit-button" /><BsFillTrashFill className='delete-button' />
                            </span>
                        </td>
                        <td> They will keep my CV on record</td>
                    </tr> */}
                </tbody>
            </table>
        </div>

        // </React.Fragment>
    );
};













export default JobApplications;