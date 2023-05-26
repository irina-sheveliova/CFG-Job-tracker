import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import JobListing from "../components/JobApplicationDetails/JobListing";

test("renders JobListing component and its contents", () => {
  render(
    <MemoryRouter>
      <JobListing />
    </MemoryRouter>
  );
});

test('renders the "Saved Jobs" header', () => {
  const headerElement = screen.getByText(/Saved Jobs/i);
  expect(headerElement).toBeInTheDocument();
});
