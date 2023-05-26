import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import JobDetails from "../components/JobApplicationDetails/Details";

test("JobDetails component renders without errors", () => {
  render(
    <MemoryRouter>
      <JobDetails />
    </MemoryRouter>
  );
});
