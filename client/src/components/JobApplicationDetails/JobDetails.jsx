import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./JobDetails.css";

// user profile details should be added too

const JobDetails = ({
  id,
  position,
  company,
  location,
  dateSaved,
  salary,
  status,
  rating,
  jobNotes,
}) => {
  const params = useParams();

  const [selectedStatus, setSelectedStatus] = useState(status);
  const [salaryValue, setSalaryValue] = useState(salary);
  const [salaryFormattedValue, setSalaryFormattedValue] = useState(
    `£${salary}/yr`
  );
  const [showNotes, setShowNotes] = useState(false);
  const [showJobInfo, setShowJobInfo] = useState(true);
  const [notes, setNotes] = useState("");
  const [editable, setEditable] = useState(false);
  const [jobnotes, setJobNotes] = useState(jobNotes);
  const [ratings, setRatings] = useState(rating);

  useEffect(() => {
    setSalaryValue(salary);
    setSelectedStatus(status);
    setSalaryFormattedValue(`£${salary}/yr`);
    setRatings(rating);
  }, [salary, status, rating]);

  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSalaryChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");
    setSalaryValue(value);
    setSalaryFormattedValue(`£${value}/yr`);
    console.log(event.target.value);
  };

  const handleNotesClick = () => {
    setShowNotes(!showNotes);
  };

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const jobInfoChange = (event) => {
    setJobNotes(event.target.value);
  };

  const handleEditableClick = () => {
    setEditable(!editable);
  };

  const handleRatingChange = (newRating) => {
    setRatings(newRating);
  };

  const formattedSalaryValue = `£${salaryValue}/yr`;

  return (
    <div className="details-page">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h2>{position}</h2>
          <h3>
            <b>{company}</b> <span>- {location}</span>
          </h3>
          <p>Saved: {dateSaved}</p>
          <div className="star-rating">
            <StarRating rating={ratings} />
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <p style={{ textAlign: "right" }}>
            <input
              type="text"
              value={formattedSalaryValue}
              style={{
                border: "none",
                borderBottom: "1px solid lightgray",
                outline: "none",
                cursor: "pointer",
                fontSize: "28px",
                width: "120px",
              }}
              onClick={(e) => (e.target.style.border = "1px solid gold")}
              onBlur={(e) => (e.target.style.border = "none")}
              onChange={handleSalaryChange}
            />
          </p>
        </div>
      </div>
      <div className="status">
        <select
          value={selectedStatus}
          onChange={handleChange}
          className="select-status"
        >
          <option value="applied">Applied</option>
          <option value="interviewing">Interviewing</option>
          <option value="offered">Offered</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => setShowJobInfo(!showJobInfo)}
          className="btn-icon"
        >
          <FontAwesomeIcon icon={faLightbulb} />
        </button>
        <button onClick={handleNotesClick} style={{ marginLeft: "20px" }}>
          {showNotes ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-file" />
          )}
        </button>
      </div>
      <br />
      {showJobInfo && (
        <>
          <p>
            {editable ? (
              <textarea
                value={jobnotes}
                onChange={jobInfoChange}
                style={{ border: "1px solid black" }}
              >
                {jobNotes}
              </textarea>
            ) : (
              <span>{jobNotes}</span>
            )}
          </p>
          <button onClick={handleEditableClick}>
            {editable ? "Save" : "Edit job info"}
          </button>
        </>
      )}
      {showNotes && (
        <div>
          <textarea value={notes} onChange={handleNotesChange} />
        </div>
      )}
    </div>
  );
};

export default JobDetails;
