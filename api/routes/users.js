import express from 'express';
import db from '../models/index.js';
import user from '../models/user.js';

const router = express.Router();
const User = db.User;

// Get a list of all users
router.get('/users', (req, res) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(err => console.log(err));
});

// Find user by UID
router.get('/users/:UID', (req, res) => {
    User.findOne({
        where: { UID: req.params.UID }
    })
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });

// Create a new user
router.post('/users', (req, res, next) => {
    User.create({
        UID: req.body.UID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
        .then(data => res.send(data))
        .catch(next);
});

// Update user data
router.post('/users/:UID', (req, res, next) => {
    User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        },
        {
            where: { UID: req.params.UID }
        })
        .then(res.json('Updated successfully'))
        .catch(next);
    });

// Delete user by UID
router.delete('/users/:UID', (req, res, next) => {
    User.destroy({
        where: { UID: req.params.UID }
    })
        .then(res.json('Deleted successfully'))
        .catch(next);
    });

export default router;