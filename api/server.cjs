const express = require('express');
const app = express();
const { User } = require('./db/models/user.cjs');
const db = require('./db/models/index.cjs');

app.use(express.json()); //To parse JSON request bodies

app.post('/users', async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    // Save the user to the database using Sequelize
    const newUser = await User.create({ firstName, lastName, email });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello World! Welcome to the job tracker API');
});

app.get('/users', (req, res) => {
  res.send('Users Route');
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});

// Sync Sequelize models with the database and start the server
db.sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((err) => {
    console.error('Error synchronizing database:', err);
  });
