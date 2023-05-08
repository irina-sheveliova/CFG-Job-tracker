import React, { useState, useEffect } from "react";
import "./JobApplications.css";
import Modal from "./Modal";
import axios from 'axios';
import { Fragment } from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";


function JobApplications() {

    const [data, setData] = useState([]);

    return (
        <React.Fragment>
            <div className="table-container">
                <table className="applications_table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Job Position</th>
                            <th>Company</th>
                            <th>Status</th>
                            <th>Date of Application</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>1 </td>
                            <td> Full Stack Developer </td>
                            <td> Google</td>
                            <td>
                                <span className="label label-applied"> Applied </span>
                            </td>
                            <td> 12/05/2023</td>
                            <td> 150k</td>
                            <td>
                                <span className="table-actions" ><BsFillTrashFill className='delete-button' />
                                    <BsFillPencilFill /></span>
                            </td>
                        </tr>

                        <tr>
                            <td>2 </td>
                            <td> Android Developer </td>
                            <td> Amazon</td>
                            <td>
                                <span className="label label-interviewing"> Interviewing </span>
                            </td>
                            <td> 12/05/2023</td>
                            <td> 120k</td>
                            <td>
                                <span className="table-actions"><BsFillTrashFill className='delete-button' />
                                    <BsFillPencilFill /></span>
                            </td>
                        </tr>
                        <tr>
                            <td>3 </td>
                            <td> Front end developer </td>
                            <td> Asos</td>
                            <td>
                                <span className="label label-rejected"> Rejected </span>
                            </td>
                            <td> 12/05/2023</td>
                            <td> 90k</td>
                            <td>
                                <span className="table-actions"><BsFillTrashFill className='delete-button' />
                                    <BsFillPencilFill /></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <Modal /> */}
        </React.Fragment>
    );
};













export default JobApplications;