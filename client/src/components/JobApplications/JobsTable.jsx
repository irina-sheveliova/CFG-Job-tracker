import React from "react";
import "./JobsTable.css";
import { Link } from "react-router-dom";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

function JobsTable({ rows, deleteJob, editJob }) {
  // this function accepts the rows, deleteJob and editJob props from JobsIndex
  return (
    <div className="table-container">
      <table className="applications_table">
        <thead>
          <tr>
            {/* <th></th> */}
            <th>Job Position</th>
            <th>Company</th>
            <th>Status</th>
            <th>Salary</th>
            <th>Date Applied</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            // converts the first character of the status to uppercase
            const statusUpper =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={idx}>
                <td>
                  <Link
                    to={`/applications/${row.id}`}
                    style={{ textDecoration: "none", color: "black" }}> {row.position}
                  </Link>
                </td>

                <td>
                  <Link
                    to={`/applications/${row.id}`}
                    style={{ textDecoration: "none", color: "black" }}> {row.company}
                  </Link>
                </td>

                <td>
                  <span className={`label label-${statusUpper}`}>
                    {statusUpper}
                  </span>
                </td>
                <td>{row.salary}</td>

                <td>{row.doa}</td>

                <td className="notes-width">{row.notes}</td>
                <td className="fill-out">
                  <span className="table-actions">
                    <BsFillPencilFill
                      className="edit-button"
                      onClick={() => editJob(idx)}
                    />
                    <BsFillTrashFill
                      className="delete-button"
                      onClick={() => deleteJob(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default JobsTable;
