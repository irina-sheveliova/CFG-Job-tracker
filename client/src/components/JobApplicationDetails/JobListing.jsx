import React from "react";
import { useState, useEffect } from "react";
import JobDetails from "./Details";
import { useNavigate, useParams } from "react-router-dom";
import "./JobListing.css";

const JobListing = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [jobs, setJobs] = useState([]); // this is the array of jobs from the API
  const [defaultJobId, setDefaultJobId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        if (data.length > 0) {
          setDefaultJobId(data[0].id);
        }
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  useEffect(() => {
    if (jobId) {
      const job = jobs.find((job) => job.id === Number(jobId));
      setSelectedJob(job);
    } else {
      setSelectedJob(null);
      setDefaultJobId(jobs.length > 0 ? jobs[0].id : null);
    }
  }, [jobId, jobs]);

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
                className={`item ${
                  (selectedJob !== null && selectedJob.id === job.id) ||
                  (selectedJob === null && defaultJobId === job.id)
                    ? "selected"
                    : ""
                }`}
              >
                <button
                  onClick={() => handleJobClick(job.id)}
                  className="list-button"
                >
                  {job.position} - {job.company}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="panel right-panel">
        {" "}
        <JobDetails />
      </div>
    </div>
  );
};

export default JobListing;
