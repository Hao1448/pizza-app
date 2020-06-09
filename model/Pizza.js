const { Sequelize } = require('sequelize');
const { sequelize } = require('./db');

const Pizza = sequelize.define('pizzas', {
  title: Sequelize.STRING, 
  price: Sequelize.FLOAT,
  text: Sequelize.STRING,
  img: Sequelize.STRING
});

Pizza.sync();

const list = async () => {
  return await Pizza.findAll();
}

module.exports = {
  list
}