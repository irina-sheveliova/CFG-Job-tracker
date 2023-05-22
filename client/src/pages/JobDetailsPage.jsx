import React from "react";
import JobListing from "../components/JobApplicationDetails/JobListing.jsx";
import "./JobDetailsPage.css";
import { FirebaseProvider } from "../context/authContext.jsx";

export default function JobDetailsPage() {
  return (
    <div>
      <div>
        <FirebaseProvider>
          <JobListing />
        </FirebaseProvider>
      </div>
    </div>
  );
}
