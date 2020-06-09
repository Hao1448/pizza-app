const { Sequelize } = require('sequelize');
const { sequelize } = require('./db');

const Order = sequelize.define('orders', { 
  data: Sequelize.STRING
});

Order.sync();

const createOrder = async fields => {
  const order = new Order(fields);
  await order.save();
  return order
}

const getById = async id => {
  return await Order.findByPk(id);
}

const list = async () => {
  return await Order.findAll();
}

module.exports = {
  list, createOrder, getById
}
