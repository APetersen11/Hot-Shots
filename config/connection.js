//import sequalize
const Sequelize = require('sequelize');
//important to use to require the env file that we have set.
require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
<<<<<<< HEAD
=======

>>>>>>> 22f861a2be9b5dca493aab6188e7473b8bcedab3




module.exports = sequelize;