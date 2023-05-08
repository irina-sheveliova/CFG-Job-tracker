import React, { useState } from "react";
import "./appdetails.css";
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
  const [newNotes, setnewNotes] = useState("")

  const onDragStart = (event, application) => {
    event.dataTransfer.setData("application", JSON.stringify(application));
    event.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };
  
  const onDrop = (event, status) => {
    event.preventDefault();
    const application = JSON.parse(event.dataTransfer.getData("application"));
    switch (status) {
      case "bookmarked":
        setBookmarked(prevBookmarked => {
          const newBookmarked = prevBookmarked.filter(app => app.id !== application.id);
          newBookmarked.push(application);
          return newBookmarked;
        });
        break;
      case "applied":
        setApplied(prevApplied => {
          const newApplied = prevApplied.filter(app => app.id !== application.id);
          newApplied.push(application);
          return newApplied;
        });
        break;
      case "interviewing":
        setInterviewing(prevInterviewing => {
          const newInterviewing = prevInterviewing.filter(app => app.id !== application.id);
          newInterviewing.push(application);
          return newInterviewing;
        });
        break;
      case "noOffer":
        setNoOffer(prevNoOffer => {
          const newNoOffer = prevNoOffer.filter(app => app.id !== application.id);
          newNoOffer.push(application);
          return newNoOffer;
        });
        break;
      case "offer":
        setOffer(prevOffer => {
          const newOffer = prevOffer.filter(app => app.id !== application.id);
          newOffer.push(application);
          return newOffer;
        });
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

  const onEdit = (status, index, field, value, field1, value1, field2, value2) => {
    switch (status) {
      case "bookmarked":
        setBookmarked(
          bookmarked.map((application, i) =>
            i === index ? { ...application, [field]: value, [field1]: value1, [field2]: value2 } : application
          )
        );
        break;
      case "applied":
        setApplied(
          applied.map((application, i) =>
          i === index ? { ...application, [field]: value, [field1]: value1, [field2]: value2 } : application
          )
        );
        break;
      case "interviewing":
        setInterviewing(
          interviewing.map((application, i) =>
          i === index ? { ...application, [field]: value, [field1]: value1, [field2]: value2 } : application
          )
        );
        break;
      case "noOffer":
        setNoOffer(
          noOffer.map((application, i) =>
          i === index ? { ...application, [field]: value, [field1]: value1, [field2]: value2 } : application
          )
        );
        break;
      case "offer":
        setOffer(
          offer.map((application, i) =>
          i === index ? { ...application, [field]: value, [field1]: value1, [field2]: value2 } : application
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
      notes: newNotes,
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
    setnewNotes("");
  };

  const DashboardBoxBody = ({ application }) => {
    return (
      <div className="dashboard-box-body">
        <p>{application.jobTitle}</p>
        <p>{application.company}</p>
        <p>{application.notes}</p>
      </div>
    );
  };
  

  return (
    <div className="dashboard">
      <div className="dashboard-column" onDragOver={(event) => onDragOver(event)} onDrop={(event) => onDrop(event, "bookmarked")}>
        <h2>Bookmarked</h2>
        {bookmarked.map((application, index) => (
              <div key={index} className="dashboard-box bookmarked" draggable onDragStart={(event) => {onDragStart(event, application);}}>
              <div className="dashboard-box-header">
            <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("bookmarked", index, "jobTitle", prompt("Enter new job title", application.jobTitle), "company", prompt("Enter company name", application.company), "notes", prompt("Enter notes", application.notes))} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("bookmarked", index)} />
              </div>
     <DashboardBoxBody application={application} />
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
     <div key={index} className="dashboard-box applied" draggable onDragStart={(event) => {onDragStart(event, application);}}>
     <div className="dashboard-box-header">
      <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("applied", index, "jobTitle", prompt("Enter new job title", application.jobTitle), "company", prompt("Enter company name", application.company), "notes", prompt("Enter notes", application.notes))} />
      <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("applied", index)} />
       </div>
     <DashboardBoxBody application={application} />
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
          <div key={index} className="dashboard-box interviewing" draggable onDragStart={(event) => {onDragStart(event, application);}}>
            <div className="dashboard-box-header">
            <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("interviewing", index, "jobTitle", prompt("Enter new job title", application.jobTitle), "company", prompt("Enter company name", application.company), "notes", prompt("Enter notes", application.notes))} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("interviewing", index)} />
              </div>
     <DashboardBoxBody application={application} />
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
           <div key={index} className="dashboard-box noOffer" draggable onDragStart={(event) => {onDragStart(event, application);}}>
           <div className="dashboard-box-header">
            <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("noOffer", index, "jobTitle", prompt("Enter new job title", application.jobTitle), "company", prompt("Enter company name", application.company), "notes", prompt("Enter notes", application.notes))} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("noOffer", index)} />
              </div>
     <DashboardBoxBody application={application} />
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
      <div key={index} className="dashboard-box offer" draggable onDragStart={(event) => {onDragStart(event, application);}}>
      <div className="dashboard-box-header">
            <FontAwesomeIcon icon={faEdit} onClick={() => onEdit("offer", index, "jobTitle", prompt("Enter new job title", application.jobTitle), "company", prompt("Enter company name", application.company), "notes", prompt("Enter notes", application.notes))} />
              <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete("offer", index)} />
              </div>
     <DashboardBoxBody application={application} />
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

