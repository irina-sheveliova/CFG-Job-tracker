import React from "react";
import JobDetails from "../components/JobApplicationDetails/JobDetails.jsx";

export default function JobDetailsPage() {
  return (
    <JobDetails
      position="Frontend Engineer"
      company="Overleaf"
      location="London Area, United Kingdom"
      dateSaved="01/02/2023"
      salary="£50,000 - £80,000"
      status="interviewing"
      rating={3.5}
      jobNotes="This is a sample note about a job. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquam ultricies, nunc nisl aliquet nunc, vitae aliquam nisl nisl nec nisl."
    />
  );
}
