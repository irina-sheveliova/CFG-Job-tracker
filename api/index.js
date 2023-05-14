import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userApi from './routes/users.js';
import jobsApi from './routes/jobs.js';

import db from './models/index.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the JobFlow API.' });
});

app.use('/api', userApi);
app.use('/api', jobsApi);
const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
});

