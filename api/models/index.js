//this file will instantiate our database connection
const dbConfig = require('../config/db-config');
const Sequelize = require('sequelize');


// Creating a new instance of sequelise and passing in an object with parameters "dialect" and "storage"
// storage creates a database in our project called 'JobFlow'.
const sequelize = new Sequelize(

    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.DIALECT
    }
)

// exporting the sequelize instance
const db = {};
db.sequelize = sequelize;
db.models = {}
db.models.user = require('./users')(sequelize.Sequelize.DataTypes)


module.exports = db;

    // //testing our connection to the database
    // (async () => {
    //     try {
    //         await sequelize.authenticate();
    //         console.log('Connection to the database successful!');
    //     } catch (error) {
    //         console.error('Error connecting to the database: ', error);
    //     }
    // })();
