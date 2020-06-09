require('dotenv').config()

const { Sequelize } = require('sequelize');

const dbconfig = {};
dbconfig.database = process.env.DB_NAME;
dbconfig.username = process.env.DB_USER;
dbconfig.password = process.env.DB_PASSWORD;
dbconfig.hostname = process.env.DB_HOST;

const sequelize = new Sequelize(dbconfig.database, dbconfig.username, dbconfig.password, {
  host: dbconfig.hostname,
  dialect: 'mysql'
});

module.exports = {
    sequelize
}