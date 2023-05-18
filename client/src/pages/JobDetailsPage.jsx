import React from "react";
import JobListing from "../components/JobApplicationDetails/JobListing.jsx";
import "./JobDetailsPage.css";
import JobDetails from "../components/JobApplicationDetails/JobDetails.jsx";

export default function JobDetailsPage() {
  return (
    <div>
      <div>
        <JobListing />
        <JobDetails />
      </div>
    </div>
  );
}
