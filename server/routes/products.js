const router = require('express').Router()
const { Product } = require('../db/models')
module.exports = router

// api/products
router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll()
    res.json(allProducts)
  } catch (err) {
    next(err)
  }
})

// api/products/:userId
router.get('/:userId', async (req, res, next) => {
  try {
    const userProducts = await Product.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(userProducts)
  } catch (err) {
    next(err)
  }
})

// api/products/single/:productId
router.get('/single/:productId', async (req, res, next) => {
  try {
    console.log('looking...')
    const product = await Product.findAll({
      where: {
        id: req.params.productId
      }
    })
    console.log('LOOK HERE', product[0])
    res.json(product[0])
  } catch (err) {
    next(err)
  }
})

// // api/products/categories
// router.get('/categories', async (req, res, next) => {
//   try {
//     const allCategory = await Category.findAll()
//     res.json(allCategory)
//   } catch (err) {
//     next(err)
//   }
// })

// // api/products/associations
// router.get('/associations', async (req, res, next) => {
//   try {
//     const associations = await CategoryAssociations.findAll()
//     res.json(associations)
//   } catch (err) {
//     next(err)
//   }
// })

// router.get('/categories/:id', async (req, res, next) => {
//   try {
//     const selectedCategory = await Category.findById(req.params.id)
//     res.json(selectedCategory)
//   } catch (err) {
//     next(err)
//   }
// })
