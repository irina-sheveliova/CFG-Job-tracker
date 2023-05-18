import Sequelize from 'sequelize';
import User from './user.js';
import Job from './job.js';
import Message from './contactUs.js';
import dotenv from 'dotenv';

//This file will instantiate our database connection
// We create a new instance of sequelise and pass in an object with parameters "dialect" and "storage"
// storage creates a database in our project called 'JobFlow'.

dotenv.config();

// get all the strings from a .env file instead
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User(sequelize, Sequelize);
db.Job = Job(sequelize, Sequelize);
db.Message = Message(sequelize, Sequelize);

export default db;

