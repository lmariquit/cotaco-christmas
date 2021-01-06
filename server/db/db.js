const Sequelize = require('sequelize')
/*
const pkg = require('../../package.json')
const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')
^USE THIS LATER
*/

const db = new Sequelize('postgres://localhost:5432/ccdatabase')

db.authenticate().then(() => {
  console.log('connected to the awesome database!!!')
})

module.exports = db
