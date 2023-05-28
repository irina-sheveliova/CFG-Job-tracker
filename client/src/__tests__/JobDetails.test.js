import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router} from "react-router-dom";
import JobDetails from "../components/JobApplicationDetails/Details";
import { FirebaseContext } from "../context/authContext";

describe("JobDetails component", () => {
  const currentUser = {
    email: "sm@gmail.com",
    password: "Sally123",
  };

  test("JobDetails component renders without errors", () => {
    render(
      <Router>
        <FirebaseContext.Provider value={{ currentUser: currentUser }}>
          <JobDetails />
        </FirebaseContext.Provider>
      </Router>
    );
  });

  test("renders job details correctly", () => {
    render(
      <Router>
        <FirebaseContext.Provider value={{ currentUser: currentUser }}>
          <JobDetails />
        </FirebaseContext.Provider>
      </Router>
    );

    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByTestId("position")).toBeInTheDocument();
    expect(screen.getByText(/Added/i)).toBeInTheDocument(); 

    const editNotesButton = screen.getByTitle(/Edit Notes/i);
    expect(editNotesButton).toBeInTheDocument();
  });
});
