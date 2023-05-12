import { useState } from 'react';
import JobApplications from "./JobApplications";
import Modal from './Modal.jsx';
import './JobsIndex.css';

function JobsIndex() {

    const [modalOpen, setModalOpen] = useState(false);

    // setting the values for rows
    const [rows, setRows] = useState([
        {
            id: "1",
            job_position: "Developer",
            company: "Google",
            doa: "10/04/2023",
            salary: "120k",
            status: "applied",
            notes: "Great company and perfect office location",
        },
        {
            id: "2",
            job_position: "Developer",
            company: "Amazon",
            doa: "10/04/2023",
            salary: "100k",
            status: "rejected",
            notes: "Nice benefits",
        },
        {
            id: "3",
            job_position: "Developer",
            company: "Facebook",
            doa: "10/04/2023",
            salary: "100k",
            status: "interviewing",
            notes: "Cool office",
        }
    ]);

    // Function to delete a row from the table
    // It filters through the set rows array.If the current index is NOT equal to the target index, rows gets added, 
    // else it will not get added and be deleted 
    const handleDelete = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    };


    return (
        <div className="index-div">
            <h1>My Job Applications</h1>
            <button className="btn" onClick={() => setModalOpen(true)}> Add a Job</button>
            <JobApplications rows={rows} deleteJob={handleDelete} />
            {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
        </div>
    );
}

export default JobsIndex;