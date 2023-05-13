import { useState } from 'react';
import JobsTable from "./JobsTable";
import Modal from './Modal.jsx';
import './JobsIndex.css';

function JobsIndex() {

    const [modalOpen, setModalOpen] = useState(false);

    // setting the values for rows here for now
    // when api is set up, the table will be populated from the database
    const [rows, setRows] = useState([
        {
            id: "1",
            position: "Developer",
            company: "Google",
            doa: "10/04/2023",
            salary: "120k",
            status: "applied",
            notes: "Great company and perfect office location",
        },
        {
            id: "2",
            position: "Developer",
            company: "Amazon",
            doa: "10/04/2023",
            salary: "100k",
            status: "rejected",
            notes: "Nice benefits",
        },
        {
            id: "3",
            position: "Developer",
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
    // If we're NOT updating a row, then it adds a new row to existing rows
    // ELSE we call the function setRows and return any edited values
    const handleSubmit = (newRow) => {
        rowToUpdate === null ?
            setRows([...rows, newRow]) :

            setRows(
                rows.map((current, idx) => {
                    if (idx !== rowToUpdate) {
                        return current
                    }
                    else {
                        return newRow;
                    }
                }))
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
            <button className="add-btn" onClick={() => setModalOpen(true)}> Add a Job</button>
            <JobsTable rows={rows} deleteJob={handleDelete} editJob={handleEdit} />
            {modalOpen && <Modal
                closeModal={() =>
                    setModalOpen(false)}
                addJob={handleSubmit}
                defaultValue={rowToUpdate !== null && rows[rowToUpdate]}
            />}
        </div>
    );
}

export default JobsIndex;