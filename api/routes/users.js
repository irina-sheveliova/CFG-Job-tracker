import express from 'express';
import db from '../models/index.js';

const router = express.Router();
const User = db.User;

router.get('/users', (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => console.log(err));
});

router.post('/users', (req, res) => {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    })
        .then(data => res.send(data))
        .catch(err => console.log(err));
});

export default router;