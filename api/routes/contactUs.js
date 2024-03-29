import express from 'express';
import db from '../models/index.js';

const router = express.Router();
const Message = db.Message;

// Get a list of all messages
router.get('/contactus', (req, res) => {
  Message.findAll()
    .then((message) => res.json(message))
    .catch((err) => console.log(err));
});

// Find message by id
router.get('/contactus/:id', (req, res) => {
  Message.findOne({
    where: { id: req.params.id },
  })
    .then((message) => res.json(message))
    .catch((err) => console.log(err));
});

// Create a new message
router.post('/contactus', (req, res, next) => {
  Message.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  })
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
});

// Update message
router.post('/contactus/:id', (req, res, next) => {
  Message.update(
    {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(res.json('Updated successfully'))
    .catch((err) => console.log(err));
});

// Delete message
router.delete('/contactus/:id', (req, res, next) => {
  Message.destroy({
    where: { id: req.params.id },
  })
    .then(res.json('Deleted successfully'))
    .catch((err) => console.log(err));
});

export default router;
