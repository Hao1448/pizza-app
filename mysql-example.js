require('dotenv').config()
var Sequelize = require('sequelize');
var sequelize = new Sequelize(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)

var Pizza = sequelize.define('pizza', {
  title: Sequelize.STRING,
  price: Sequelize.INTEGER
});

sequelize.sync().then(function() {
  return Pizza.create({
    title: 'Pepperoni',
    price: 5
  });
}).then(function(jane) {
  console.log(jane.get({
    plain: true
  }));
});