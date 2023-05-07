import React, { useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const MAX_JOBS = 10;

const Dashboard = () => {
  const [bookmarked, setBookmarked] = useState([]);
  const [applied, setApplied] = useState([]);
  const [interviewing, setInterviewing] = useState([]);
  const [noOffer, setNoOffer] = useState([]);
  const [offer, setOffer] = useState([]);

  const [newJob, setNewJob] = useState("");
  const [newCompany, setNewCompany] = useState("");

  const onDragStart = (event, application) => {
    event.dataTransfer.setData("application", JSON.stringify(application));
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, status) => {
    const application = JSON.parse(event.dataTransfer.getData("application"));
    switch (status) {
      case "bookmarked":
        setBookmarked([...bookmarked, application]);
        break;
      case "applied":
        setApplied([...applied, application]);
        break;
      case "interviewing":
        setInterviewing([...interviewing, application]);
        break;
      case "noOffer":
        setNoOffer([...noOffer, application]);
        break;
      case "offer":
        setOffer([...offer, application]);
        break;
      default:
        break;
    }
  };

  const onDelete = (status, index) => {
    switch (status) {
      case "bookmarked":
        setBookmarked(bookmarked.filter((_, i) => i !== index));
        break;
      case "applied":
        setApplied(applied.filter((_, i) => i !== index));
        break;
      case "interviewing":
        setInterviewing(interviewing.filter((_, i) => i !== index));
        break;
      case "noOffer":
        setNoOffer(noOffer.filter((_, i) => i !== index));
        break;
      case "offer":
        setOffer(offer.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };

  const onEdit = (status, index, field, value) => {
    switch (status) {
      case "bookmarked":
        setBookmarked(
          bookmarked.map((application, i) =>
            i === index ? { ...application, [field]: value } : application
          )
        );
        break;
      case "applied":
        setApplied(
          applied.map((application, i) =>
            i === index ? { ...application, [field]: value } : application
          )
        );
        break;
      case "interviewing":
        setInterviewing(
          interviewing.map((application, i) =>
            i === index ? { ...application, [field]: value } : application
          )
        );
        break;
      case "noOffer":
        setNoOffer(
          noOffer.map((application, i) =>
            i === index ? { ...application, [field]: value } : application
          )
        );
        break;
      case "offer":
        setOffer(
          offer.map((application, i) =>
            i === index ? { ...application, [field]: value } : application
          )
        );
        break;
      default:
        break;
    }
  };

  const onAdd = (status) => {
    if (status === "bookmarked" && bookmarked.length >= MAX_JOBS) return;
    if (status === "applied" && applied.length >= MAX_JOBS) return;
    if (status === "interviewing" && interviewing.length >= MAX_JOBS) return;
    if (status === "noOffer" && noOffer.length >= MAX_JOBS) return;
    if (status === "offer" && offer.length >= MAX_JOBS) return;

    const newApplication = {
      jobTitle: newJob,
      company: newCompany,

    };

    switch (status) {
      case "bookmarked":
        setBookmarked([...bookmarked, newApplication]);
        break;
      case "applied":
        setApplied([...applied, newApplication]);
        break;
      case "interviewing":
        setInterviewing([...interviewing, newApplication]);
        break;
      case "noOffer":
        setNoOffer([...noOffer, newApplication]);
        break;
      case "offer":
        setOffer([...offer, newApplication]);
        break;
      default:
        break;
    }

    setNewJob("");
    setNewCompany("");
  };

  return (
    <div className="dashboard">
      <div className="dashboard-column" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "bookmarked")}>
        <h2>Bookmarked</h2>
        {bookmarked.map((application, index) => (
          <div key={index} className="dashboard-box" draggable onDragStart={(event) => onDragStart(event, application)}>
            <div className="dashboard-box-header">
              <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("bookmarked", index, "jobTitle", prompt("Enter new job title", application.jobTitle))} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("bookmarked", index)} />
            </div>
            <div className="dashboard-box-body">
              <p>{application.jobTitle}</p>
              <p>{application.company}</p>
            </div>
          </div>
        ))}
        {bookmarked.length < MAX_JOBS && (
          <div className="dashboard-box dashboard-box-add" onClick={() => onAdd("bookmarked")}>
            <FontAwesomeIcon icon={faPlus} />
            <p>Add new job</p>
          </div>
        )}
      </div>
      <div className="dashboard-column" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "applied")}>
        <h2>Applied</h2>
        {applied.map((application, index) => (
          <div key={index} className="dashboard-box" draggable onDragStart={(event) => onDragStart(event, application)}>
            <div className="dashboard-box-header">
              <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("applied", index, "jobTitle", prompt("Enter new job title", application.jobTitle))} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("applied", index)} />
            </div>
            <div className="dashboard-box-body">
              <p>{application.jobTitle}</p>
              <p>{application.company}</p>
            </div>
          </div>
        ))}
        {applied.length < MAX_JOBS && (
          <div className="dashboard-box dashboard-box-add" onClick={() => onAdd("applied")}>
            <FontAwesomeIcon icon={faPlus} />
            <p>Add new job</p>
          </div>
        )}
      </div>
      <div className="dashboard-column" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "interviewing")}>
        <h2>Interviewing</h2>
        {interviewing.map((application, index) => (
          <div key={index} className="dashboard-box" draggable onDragStart={(event) => onDragStart(event, application)}>
            <div className="dashboard-box-header">
              <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("interviewing", index, "jobTitle", prompt("Enter new job title", application.jobTitle))} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("interviewing", index)} />
            </div>
            <div className="dashboard-box-body">
              <p>{application.jobTitle}</p>
              <p>{application.company}</p>
            </div>
          </div>
        ))}
        {interviewing.length < MAX_JOBS && (
          <div className="dashboard-box dashboard-box-add" onClick={() => onAdd("interviewing")}>
            <FontAwesomeIcon icon={faPlus} />
            <p>Add new job</p>
          </div>
        )}
      </div>
      <div className="dashboard-column" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "noOffer")}>
        <h2>No Offer</h2>
        {noOffer.map((application, index) => (
          <div key={index} className="dashboard-box" draggable onDragStart={(event) => onDragStart(event, application)}>
            <div className="dashboard-box-header">
              <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("noOffer", index, "jobTitle", prompt("Enter new job title", application.jobTitle))} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("noOffer", index)} />
            </div>
            <div className="dashboard-box-body">
              <p>{application.jobTitle}</p>
              <p>{application.company}</p>
            </div>
          </div>
        ))}
        {noOffer.length < MAX_JOBS && (
          <div className="dashboard-box dashboard-box-add" onClick={() => onAdd("noOffer")}>
            <FontAwesomeIcon icon={faPlus} />
            <p>Add new job</p>
            </div>
        )}
      </div>
      <div className="dashboard-column" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "offer")}>
        <h2>Offer</h2>
        {offer.map((application, index) => (
          <div key={index} className="dashboard-box" draggable onDragStart={(event) => onDragStart(event, application)}>
            <div className="dashboard-box-header">
              <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("offer", index, "jobTitle", prompt("Enter new job title", application.jobTitle))} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("offer", index)} />
            </div>
            <div className="dashboard-box-body">
              <p>{application.jobTitle}</p>
              <p>{application.company}</p>
            </div>
          </div>
        ))}
        {offer.length < MAX_JOBS && (
          <div className="dashboard-box dashboard-box-add" onClick={() => onAdd("offer")}>
            <FontAwesomeIcon icon={faPlus} />
            <p>Add new job</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

