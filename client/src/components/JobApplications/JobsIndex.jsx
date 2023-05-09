import JobApplications from "./JobApplications";
import './JobsIndex.css';
import Modal from './Modal.jsx';

function JobsIndex() {
    return (
        <div className="index-div">
            <h1>My Job Applications</h1>
            <JobApplications />
            <Modal />
        </div>
    );
}

export default JobsIndex;