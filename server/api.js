const express = require('express')
const app = express()
const router = express.Router()
const morgan = require('morgan')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const path = require('path')
// const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./db')
// const sessionStore = new SequelizeStore({db})

const createApp = () => {
  app.use(morgan('dev'))
  app.use(helmet())
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  // app.use(app.router)

  // If API route not found...
  // router.use(function(req, res, next) {
  //   const err = new Error('Not found.')
  //   err.status = 404
  //   next(err)
  // })

  app.use('/api', require('./routes'))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // router.get('/', function(req, res, next) {
  //   res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
  // })

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    } else {
      next()
    }
  })

  // default to index.html if API route not provided
  app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
    console.log('didnt find anything. Default!')
  })

  // We messed up...
  app.use(function(err, req, res, next) {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  const port = process.env.PORT || 3000 // this can be very useful if you deploy to Heroku!
  app.listen(port, function() {
    console.log('Knock, knock')
    console.log("Who's there?")
    console.log(`Your server, listening on port ${port}`)
  })
}

const syncDb = () => db.sync()
// const syncDb = () => db.sync({force: true})

async function bootApp() {
  // await sessionStore.sync()
  await syncDb()
  await createApp()
  await startListening()
}

if (require.main === module) {
  bootApp()
} else {
  createApp()
}

module.exports = router
