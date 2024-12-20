const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
