import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
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
  const [showNotes, setShowNotes] = useState(false);
  const [showJobInfo, setShowJobInfo] = useState(false);
  const [notes, setNotes] = useState("");
  const [editable, setEditable] = useState(false);
  const [jobnotes, setJobNotes] = useState(jobNotes);
  const [ratings, setRatings] = useState(rating);

  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSalaryChange = (event) => {
    setSalaryValue(event.target.value);
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

  return (
    <div className="details-page">
      <h2>{position}</h2>
      <h3>
        <b>{company}</b> <span>- {location}</span>
      </h3>
      <p>Saved: {dateSaved}</p>
      <p>
        Salary:{" "}
        <input
          type="text"
          value={salaryValue}
          style={{
            border: "none",
            borderBottom: "1px solid lightgray",
            outline: "none",
            cursor: "pointer",
            width: "100px",
          }}
          onClick={(e) => (e.target.style.border = "1px solid gold")}
          onBlur={(e) => (e.target.style.border = "none")}
          onChange={handleSalaryChange}
        />
      </p>
      <div className="star-rating">
        <StarRating rating={ratings} onRatingChange={handleRatingChange} />
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

      <button onClick={() => setShowJobInfo(!showJobInfo)}>Job Info</button>
      <br />
      {showJobInfo && (
        <>
          <p>
            {editable ? (
              <textarea
                value={jobnotes}
                onChange={jobInfoChange}
                style={{ border: "1px solid black", margin: "0 5px" }}
              >
                {jobNotes}
              </textarea>
            ) : (
              <span style={{ margin: "0 5px" }}>{jobNotes}</span>
            )}
          </p>
          <button onClick={handleEditableClick}>
            {editable ? "Save" : "Edit job info"}
          </button>
        </>
      )}
      <button onClick={handleNotesClick}>
        {showNotes ? "Hide Notes" : "Add Notes"}
      </button>
      {showNotes && (
        <div>
          <textarea value={notes} onChange={handleNotesChange} />
        </div>
      )}
    </div>
  );
};

export default JobDetails;
