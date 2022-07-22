const sequelize = require("sequelize");

const connection = new sequelize("database_development", "root", null, {
  host: "127.0.0.1",
  dialect: "mysql",
});

module.exports = connection;
