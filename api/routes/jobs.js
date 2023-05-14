import express from 'express';
import db from '../models/index.js';

const router = express.Router();
const Job = db.Job;

router.get('/jobs', (req, res) => {
    Job.findAll()
        .then(jobs => res.json(jobs))
        .catch(err => console.log(err));
});

router.post('/jobs', (req, res) => {
    Job.create({
        position: req.body.position,
        company: req.body.company,
        doa: req.body.doa,
        salary: req.body.salary,
        status: req.body.status,
        notes: req.body.notes

    })
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

export default router;
