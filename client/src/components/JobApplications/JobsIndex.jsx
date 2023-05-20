import { useState, useEffect, useContext } from "react";
import JobsTable from "./JobsTable";
import Modal from "./Modal.jsx";
import "./JobsIndex.css";
import api from "./api";
import { FirebaseContext } from "../../context/authContext";

function JobsIndex() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  // useEffect runs on application start
  // makes a http request to fetch the data from the api
  const { currentUser } = useContext(FirebaseContext);

  const fetchJobs = async () => {
    try {
      console.log("fetchjobs");
      const response = await api.get("/api/jobs");
      console.log(response.data);

      // const jobsWithUserId = response.data.map((job) => ({
      //   ...job,
      //   userId: currentUser.uid,
      // }));
      // console.log(jobsWithUserId);

      // setRows(jobsWithUserId);
      setRows(response.data);
      console.log("setRows done");
    } catch (err) {
      if (err.response) {
        //not in the 200 response range
        console.log(err.response.data);
        console.log(err.response.status);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Function to DELETE a row from the table
  // It filters through the set rows array.If the current index is NOT equal to the target index, rows gets added,
  // else it will not get added and be deleted
  const handleDelete = (targetIndex) => {
    const deleteJob = async (id) => {
      try {
        const response = await api.delete("/api/jobs/" + id);
        const newRows = rows.filter((_, idx) => idx !== targetIndex);
        setRows(newRows);
      } catch (err) {
        if (err.response) {
          //not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    const rowToDelete = rows.find((_, idx) => idx === targetIndex);

    if (rowToDelete) {
      deleteJob(rowToDelete.id);
    }
  };

  // Function to ADD a row in the table
  // If we're NOT updating a row, then it adds a new row to existing rows
  // ELSE we call the function setRows and return any edited values

  const handleSubmit = (submittedRow) => {
    // rowToUpdate === null ?
    //     setRows([...rows, newRow]) :

    const addJob = async (row) => {
      try {
        const response = await api.post("/api/jobs", row);
        fetchJobs();
      } catch (err) {
        if (err.response) {
          //not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    const updateJob = async (row) => {
      try {
        const response = await api.post("/api/jobs/" + row.id, row);
        const newRows = rows.map((item) => {
          if (item.id !== row.id) {
            return item;
          } else {
            return row;
          }
        });
        setRows(newRows);
      } catch (err) {
        if (err.response) {
          //not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    if (!submittedRow.id) {
      addJob(submittedRow);
    } else {
      updateJob(submittedRow);
    }
    // setRows(
    //     rows.map((current, idx) => {
    //         if (idx !== rowToUpdate) {
    //             return current
    //         }
    //         else {
    //             return newRow;
    //         }
    //     }))
  };

  // Function to UPDATE a row in the table
  const [rowToUpdate, setRowToUpdate] = useState(null);

  //whenever the handleEdit function is being called, we take in the index it's called at
  const handleEdit = (idx) => {
    setRowToUpdate(idx);
    setModalOpen(true);
  };

  return (
    <div className="index-div">
      <h1 className="applications-header">My Job Applications</h1>
      <button className="add-btn" onClick={() => setModalOpen(true)}>
        {" "}
        Add a Job
      </button>
      {currentUser && <p className="welcome">Welcome {currentUser.email}</p>}
      <JobsTable rows={rows} deleteJob={handleDelete} editJob={handleEdit} />
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToUpdate(null);
          }}
          addJob={handleSubmit}
          defaultValue={rowToUpdate !== null && rows[rowToUpdate]}
        />
      )}
    </div>
  );
}

export default JobsIndex;
