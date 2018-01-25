const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING
  },
  googleId: {
    type: Sequelize.STRING
  }
})

module.exports = User

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