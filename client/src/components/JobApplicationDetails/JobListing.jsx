import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import JobDetails from "./Details";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./JobListing.css";

const JobListing = () => {
  const [selectedJobId, setSelectedJobId] = useState(null);
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
        if (data.length > 0) {
          setSelectedJobId(data[0].id);
        }
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

  useEffect(() => {
    if (jobId) {
      setSelectedJobId(Number(jobId));
    } else {
      const storedJobId = localStorage.getItem("selectedJobId");
      setSelectedJobId(
        storedJobId ? Number(storedJobId) : jobs.length > 0 ? jobs[0].id : null
      );
    }
  }, [jobId, jobs]);

  useEffect(() => {
    localStorage.setItem("selectedJobId", selectedJobId);
  }, [selectedJobId]);

  const handleJobClick = (jobId) => {
    setSelectedJobId(jobId);
    navigate(`/applications/${jobId}`);
  };

  const handleGoBack = () => {
    navigate("/applications");
  };

  return (
    <div className="job-listing">
      <div className="panel left-panel">
        <div className="back-button">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={handleGoBack}
            className="back-icon"
          />
        </div>
        <div className="job-listing-details">
          <h4>Saved Jobs</h4>
          <ul className="listed-items">
            {jobs.map((job) => (
              <li
                key={job.id}
                className={`item ${selectedJobId === job.id ? "selected" : ""}`}
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
        <JobDetails />
      </div>
    </div>
  );
};

export default JobListing;
