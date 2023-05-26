import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import JobDetailsPage from "../pages/JobDetailsPage";

test("Job details page  renders without any errors", () => {
  render(
    <MemoryRouter>
      <JobDetailsPage />
    </MemoryRouter>
  );
});
