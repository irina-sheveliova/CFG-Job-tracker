import React from "react";
import JobDetails from "./JobDetails";
import { useNavigate, useParams } from "react-router-dom";
import "./JobListing.css";

const jobs = [
  {
    id: 1,
    position: "Frontend Engineer",
    company: "Lush",
    location: "Brighton, UK",
    dateSaved: "May 1, 2023",
    salary: "130,000",
    status: "applied",
    rating: 4,
    jobNotes: "This is a great opportunity!",
  },
  {
    id: 2,
    position: "Backend Developer",
    company: "Overleaf",
    location: "London, UK",
    dateSaved: "April 28, 2023",
    salary: "70,000",
    status: "interviewing",
    rating: 5,
    jobNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    id: 3,
    position: "Full Stack Developer",
    company: "Ancestry.com",
    location: "Chicago, USA",
    dateSaved: "April 25, 2023",
    salary: "90,000",
    status: "offered",
    rating: 3,
    jobNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const JobListing = () => {
  const [selectedJob, setSelectedJob] = React.useState(null);
  const navigate = useNavigate();
  const { jobId } = useParams();

  React.useEffect(() => {
    if (jobId) {
      const job = jobs.find((job) => job.id === Number(jobId));
      setSelectedJob(job);
    } else {
      setSelectedJob(null);
    }
  }, [jobId]);

  const handleJobClick = (jobId) => {
    const job = jobs.find((job) => job.id === jobId);
    setSelectedJob(job);
    navigate(`/applications/${job.id}`);
  };

  return (
    <div className="job-listing">
      <div className="panel left-panel">
        <div className="job-listing-details">
          <h4>Saved Jobs</h4>
          <ul className="listed-items">
            {jobs.map((job) => (
              <li key={job.id} className="item">
                <button
                  onClick={() => handleJobClick(job.id)}
                  className="list-button"
                >
                  {console.log(job.position, job.company)}
                  {job.position} - {job.company}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="panel right-panel">
        {selectedJob ? (
          <JobDetails {...selectedJob} />
        ) : (
          <p>
            Select a job to see details:{" "}
            <b>
              This is a placeholder for the applications_id selected from the
              applications page, which will be the default page of the user
              except they click on any other job listings on the left
            </b>
          </p>
        )}
      </div>
    </div>
  );
};

export default JobListing;
