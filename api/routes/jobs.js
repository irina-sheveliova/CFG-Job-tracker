import express from "express";
import db from "../models/index.js";

const router = express.Router();
const Job = db.Job;

// Get a list of all job applications
router.get("/jobs", (req, res) => {
  Job.findAll()
    .then((jobs) => res.json(jobs))
    .catch((err) => console.log(err));
});

// Find job application by id
router.get("/jobs/:id", (req, res) => {
  Job.findOne({
    where: { id: req.params.id },
  })
    .then((job) => res.json(job))
    .catch((err) => console.log(err));
});

// Create a new job application
router.post("/jobs", (req, res) => {
  Job.create({
    position: req.body.position,
    company: req.body.company,
    doa: req.body.doa,
    salary: req.body.salary,
    status: req.body.status,
    notes: req.body.notes,
  })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

// Update job application data
router.post("/jobs/:id", (req, res, next) => {
  Job.update(
    {
      position: req.body.position,
      company: req.body.company,
      doa: req.body.doa,
      salary: req.body.salary,
      status: req.body.status,
      notes: req.body.notes,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(res.json("Updated successfully"))
    .catch(next);
});

// Update job application data
router.put("/jobs/:id", (req, res, next) => {
  Job.update(
    {
      position: req.body.position,
      company: req.body.company,
      doa: req.body.doa,
      salary: req.body.salary,
      status: req.body.status,
      notes: req.body.notes,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(res.json("Updated successfully"))
    .catch(next);
});

// Delete job application by id
router.delete("/jobs/:id", (req, res, next) => {
  Job.destroy({
    where: { id: req.params.id },
  })
    .then(res.json("Deleted successfully"))
    .catch(next);
});

export default router;
