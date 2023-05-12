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

    // Function to DELETE a row from the table
    // It filters through the set rows array.If the current index is NOT equal to the target index, rows gets added, 
    // else it will not get added and be deleted 
    const handleDelete = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    };


    // Function to ADD a row in the table
    // The function returns existing rows and adds a new row
    const handleSubmit = (newRow) => {
        setRows([...rows, newRow])
    }

    // Function to UPDATE a row in the table
    const [rowToUpdate, setRowToUpdate] = useState(null)


    //whenever the handleEdit function is being called, we take in the index it's called at
    const handleEdit = (idx) => {
        setRowToUpdate(idx);
        setModalOpen(true);
    }


    return (
        <div className="index-div">
            <h1>My Job Applications</h1>
            <button className="btn" onClick={() => setModalOpen(true)}> Add a Job</button>
            <JobApplications rows={rows} deleteJob={handleDelete} editJob={handleEdit} />
            {modalOpen && <Modal
                closeModal={() => setModalOpen(false)}
                addJob={handleSubmit} />}
        </div>
    );
}

export default JobsIndex;