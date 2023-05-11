import React from "react";
import { useState, useEffect } from "react";
import JobDetails from "./JobDetails";
import { useNavigate, useParams } from "react-router-dom";
import "./JobListing.css";
import jobs from "./jobs";

const JobListing = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();
  const { jobId } = useParams();

  useEffect(() => {
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
              <li
                key={job.id}
                className={`item ${selectedJob === job.id ? "selected" : ""}`}
              >
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
