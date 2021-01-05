const User = require('./user')
const Product = require('./product')

/* Associations */
Product.belongsTo(User)
User.hasMany(Product)

module.exports = {
  User,
  Product
}
