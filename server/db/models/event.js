const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Event

/**
 * instanceMethods
 */
//to add if any

/**
 * classMethods
 */
//to add if any

/**
 * hooks
 */
//to add if any