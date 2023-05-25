import React from "react";
import { render, screen } from "@testing-library/react";
import JobListing from "../components/JobApplicationDetails/JobListing";

test("renders JobListing component and its contents", () => {
  // general test to see if the component renders
  render(<JobListing />);

  // test it renders header
  const headerElement = screen.getByText(/Saved Jobs/i);
  expect(headerElement).toBeInTheDocument();

  // test the component renders the list of jobs
  const mockJobs = [
    { id: 1, position: "Software Engineer", company: "ABC Inc." },
    { id: 2, position: "Data Analyst", company: "XYZ Corp." },
  ];
  render(<JobListing />, { initialState: { jobs: mockJobs } });
  const jobElements = screen.getAllByRole("button", {
    name: /- ABC Inc.|- XYZ Corp./i,
  });
  expect(jobElements.length).toBe(2);
});
