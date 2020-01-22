const Sequelize = require('sequelize')

module.exports = new Sequelize('mysql://root:password@localhost/burger_time_db')
