import { useState } from 'react';
import JobApplications from "./JobApplications";
import Modal from './Modal.jsx';
import './JobsIndex.css';



function JobsIndex() {

    const [modalOpen, setModalOpen] = useState(false);

    const rows = [
        {
            id: "1",
            job_position: "Developer",
            company: "Google",
            doa: "10/04/2023",
            salary: "120k",
            status: "Applied",
            notes: "Great company",
        },
        {
            id: "2",
            job_position: "Developer",
            company: "Amazon",
            doa: "10/04/2023",
            salary: "100k",
            status: "Rejected",
            notes: "Nice benefits",
        },
        {
            id: "3",
            job_position: "Developer",
            company: "Facebook",
            doa: "10/04/2023",
            salary: "100k",
            status: "Interviewing",
            notes: "Cool office",
        }
    ]

    return (
        <div className="index-div">
            <h1>My Job Applications</h1>
            <JobApplications rows={rows} />
            <button className="btn" onClick={() => setModalOpen(true)}> Add</button>
            {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
        </div>
    );
}

export default JobsIndex;