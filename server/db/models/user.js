const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shortName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  family: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  selection: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  profileMessage: {
    type: Sequelize.STRING,
    allowNull: true
  },
  photo: {
    type: Sequelize.STRING,
    set(valueToBeSet) {
      if (valueToBeSet === '') {
        this.setDataValue('name', undefined)
      }
    },
    defaultValue: 'https://odadee.net/themes/default/assets/images/default.jpg'
  },
  photoSmall: {
    type: Sequelize.STRING,
    set(valueToBeSet) {
      if (valueToBeSet === '') {
        this.setDataValue('name', undefined)
      }
    },
    defaultValue: 'https://odadee.net/themes/default/assets/images/default.jpg'
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

module.exports = User
