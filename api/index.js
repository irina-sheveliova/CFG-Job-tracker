import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userApi from './routes/users.js';
import jobsApi from './routes/jobs.js';
import contactUsApi from './routes/contactUs.js';
import db from './models/index.js';
import admin from 'firebase-admin';
import fs from 'fs';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the JobFlow API.' });
});
app.use('/api', userApi);
app.use('/api', jobsApi);
app.use('/api', contactUsApi);

const PORT = process.env.PORT || 8080;

// Using the sync() method to sync our models to SQL tables
// can use 'db.sequelize.sync({ force: true })' to drop and recreate any existing tables

// db.sequelize.sync({ force: true });
db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  });
// import and parse the firebase service-account json file
const rawData = await fs.readFileSync('./cfg-job-tracker-74b5a-firebase-adminsdk-a3hvt-92a1689176.json')
const serviceAccount = JSON.parse(rawData);

// initialize firebase admin API with the service account
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// create authentication middleware that uses firebase
const authenticate = async (req, res, next) => {
  // check for auth header
  if (!req.headers.authorization) {
    res.status(401)
    return;
  }
  try {
    // verify the auth header token
    const user = await admin.auth().verifyIdToken(req.headers.authorization);
    // get the user from the database
    const userInDb = await db.User.findOne({
      where: { UID: user.user_id }
    });
    // set userId on request, to be available in routes
    req.userId = userInDb.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(401)
    return;
  }

};
// add authentication middleware to router, and add jobsApi router
app.use(authenticate);
app.use('/api', jobsApi);