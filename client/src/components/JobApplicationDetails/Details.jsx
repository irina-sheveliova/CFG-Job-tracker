import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./JobDetails.css";
import moment from "moment";
import { FirebaseContext } from "../../context/authContext";

moment.locale("en-gb");

const JobDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [jobNotes, setJobNotes] = useState("");

  const [content, setContent] = useState({
    status: "",
    company: "",
    position: "",
    salaryValue: 0,
    jobnotes: "",
    doa: "",
  });

  const { pathname } = useLocation();
  const jobId = pathname.split("/")[2];
  const { currentUser } = useContext(FirebaseContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/jobs/${jobId}`);
        if (res.ok) {
          const data = await res.json();
          setContent((prevData) => ({
            ...prevData,
            status: data.status,
            position: data.position,
            company: data.company,
            doa: data.doa,
            salaryValue: data.salary,
            jobnotes: data.notes,
          }));
          setJobNotes(data.notes);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [jobId]);

  const handleStatusChange = (event) => {
    setContent((prevData) => ({
      ...prevData,
      status: event.target.value,
    }));
  };

  const handleJobNotesClick = () => {
    setIsEditing(true);
  };

  const handleJobNotesChange = (event) => {
    setJobNotes(event.target.value);
  };

  const handleJobNotesSave = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/jobs/${jobId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes: jobNotes }),
      });

      if (res.ok) {
        setIsEditing(false);
        setContent((prevData) => ({
          ...prevData,
          jobnotes: jobNotes,
        }));
      } else {
        throw new Error("Error saving job notes");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const updateStatus = async () => {
      try {
        await fetch(`http://localhost:8080/api/jobs/${jobId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: content.status,
          }),
        });
        console.log("Status updated successfully");
      } catch (error) {
        console.error("Error updating status:", error);
      }
    };

    updateStatus();
  }, [content.status, jobId]);

  return (
    <div className="details-page">
      {currentUser && `Welcome ${currentUser.email}`}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <h2>{content.position}</h2>
          <h3>
            <b>{content.company}</b>
          </h3>
          <p>Saved {moment(content.doa).fromNow()}</p>
          <div className="star-rating">
            <StarRating />
          </div>
        </div>

        <div style={{ flex: "1", marginTop: "20px" }}>
          <p style={{ textAlign: "right" }}>
            <span id="salary-span">{`£${content.salaryValue}/yr`}</span>
          </p>
        </div>
      </div>

      <div className="status">
        <select
          value={content.status}
          onChange={handleStatusChange}
          className="select-status"
        >
          <option value="applied">Applied</option>
          <option value="not-Applied">Not Applied</option>
          <option value="interviewing">Interviewing</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <div style={{ display: "flex" }}>
        <button id="btn-icon" onClick={handleJobNotesClick}>
          <FontAwesomeIcon icon={faEdit} title="Edit Notes" />
        </button>
      </div>
      <br />
      {isEditing ? (
        <div>
          <textarea
            value={jobNotes}
            onChange={handleJobNotesChange}
            style={{ border: "1px solid black" }}
          />
          <button onClick={handleJobNotesSave}>Save</button>
        </div>
      ) : (
        <p onClick={handleJobNotesClick}>{jobNotes}</p>
      )}
    </div>
  );
};

export default JobDetails;
