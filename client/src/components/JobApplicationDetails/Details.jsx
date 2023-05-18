import React from "react";
import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { AuthContext } from "../context/authContext";
import "./JobDetails.css";

const JobDetails = () => {
  const [content, setContent] = useState({
    selectedStatus: "",
    company: "",
    position: "",
    salaryValue: 0,
    salaryFormattedValue: `£${0}/yr`,
    jobnotes: "",
    doa: "",
  });

  const [showJobInfo, setShowJobInfo] = useState(true);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState("");
  const [editable, setEditable] = useState(false);

  const { pathname } = useLocation();
  const jobId = pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/jobs/${jobId}`);
        if (res.ok) {
          const data = await res.json();
          setContent((prevData) => ({
            ...prevData,
            selectedStatus: data.status,
            position: data.position,
            company: data.company,
            doa: data.doa,
            salaryValue: data.salary,
            salaryFormattedValue: `£${data.salary}/yr`,
            jobnotes: data.notes,
          }));
          console.log(data, "this is the data - line 28");
        } else {
          throw new Error("Error fetching data");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [jobId]);

  const handleNotesClick = () => {
    setContent((prevData) => ({
      ...prevData,
      showNotes: !prevData.showNotes,
    }));
  };

  const handleNotesChange = (event) => {
    setContent((prevData) => ({
      ...prevData,
      notes: event.target.value,
    }));
  };

  const jobInfoChange = (event) => {
    setContent((prevData) => ({
      ...prevData,
      jobnotes: event.target.value,
    }));
  };

  const handleEditableClick = () => {
    setContent((prevData) => ({
      ...prevData,
      editable: !prevData.editable,
    }));
  };

  return (
    <div className="details-page">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h2>{content.position}</h2>
          <h3>
            <b>{content.company}</b>
          </h3>
          <p>Saved: {content.doa}</p>
          <div className="star-rating">
            <StarRating />
          </div>
        </div>
        <div style={{ flex: "1", marginTop: "20px" }}>
          <p style={{ textAlign: "right" }}>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
                border: "none",
                outline: "none",
                cursor: "pointer",
                fontSize: "28px",
                border: "1px solid gold",
                borderRadius: "5px",
              }}
            >
              {content.salaryValue}
            </span>
          </p>
        </div>
      </div>
      <div className="status">
        <div class="chevron-badge">
          <span class="chevron-badge-text">{content.selectedStatus}</span>
        </div>
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
                value={content.jobotes}
                onChange={jobInfoChange}
                style={{ border: "1px solid black" }}
              >
                {content.jobnotes}
              </textarea>
            ) : (
              <span>{content.jobnotes}</span>
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
