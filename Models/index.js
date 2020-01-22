const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config')

module.exports = {
  Burger: require('./Burger.js')(sequelize, Model, DataTypes)
}