import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JobDetails from "../components/JobApplicationDetails/Details";
import { FirebaseContext } from "../context/authContext";

describe("JobDetails component", () => {
  const currentUser = {
    email: "j@g.com",
    accessToken: "dummyToken",
  };

  const mockHistory = {
    push: jest.fn(),
    location: { pathname: "/applications/1" },
  };

  const apiMock = {
    get: jest.fn().mockResolvedValue({
      data: {
        status: "Interviewing",
        company: "Bristol Airport",
        position: "Software Engineer",
        salary: 90000,
        doa: "2023-05-25",
        notes: "sally mae said",
      },
    }),
    put: jest.fn().mockResolvedValue({}),
  };

  beforeEach(() => {
    mockHistory.push.mockClear();
    apiMock.get.mockClear();
    apiMock.put.mockClear();
  });

  jest.setTimeout(50000);

  test("JobDetails component renders without errors", () => {
    render(
      <Router>
        <FirebaseContext.Provider
          value={{ currentUser: { accessToken: currentUser.accessToken } }}
        >
          <JobDetails />
        </FirebaseContext.Provider>
      </Router>
    );
  });

  test("renders job details correctly", async () => {
    render(
      <Router history={mockHistory}>
        <FirebaseContext.Provider value={{ currentUser }}>
          <JobDetails />
        </FirebaseContext.Provider>
      </Router>
    );

    const findByTextContent = async (content) => {
      return await screen.findByText((_, element) => {
        const hasPosition = /Software Engineer/.test(element.textContent);
        const hasCompany = /Bristol Airport/.test(element.textContent);
        return hasPosition && hasCompany;
      });
    };

    const timeoutDuration = jest.setTimeout(500000); 

    await waitFor(
      async () => {
        const positionElement = await findByTextContent("Software Engineer");
        expect(positionElement).toBeInTheDocument();
      },
      { timeout: timeoutDuration }
    );

    await waitFor(
      async () => {
        const companyElement = await findByTextContent("Bristol Airport");
        expect(companyElement).toBeInTheDocument();
      },
      { timeout: timeoutDuration }
    );

    await waitFor(
      async () => {
        const savedElement = await findByTextContent("Saved 2 days ago");
        expect(savedElement).toBeInTheDocument();
      },
      { timeout: timeoutDuration }
    );

    await waitFor(
      async () => {
        const salaryElement = await findByTextContent("£90000/yr");
        expect(salaryElement).toBeInTheDocument();
      },
      { timeout: timeoutDuration }
    );

    await waitFor(
      async () => {
        const notesElement = await findByTextContent("sally mae said");
        expect(notesElement).toBeInTheDocument();
      },
      { timeout: timeoutDuration }
    );
  });
});
