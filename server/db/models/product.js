const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  shortName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  estCost: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: true
  },
  url: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT
  },
  purchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  image: {
    type: Sequelize.STRING,
    set(valueToBeSet) {
      if (valueToBeSet === '') {
        this.setDataValue('name', undefined)
      }
    },
    defaultValue: 'https://odadee.net/themes/default/assets/images/default.jpg'
  }
})

module.exports = Product
