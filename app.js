const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const indexRouter = require('./routes/Index')
const visitorRouter = require('./routes/visitor')
const countryRouter = require('./routes/country')

const app = express()
const dotenv = require('dotenv');
dotenv.config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/visitors', visitorRouter)
app.use('/country', countryRouter)

module.exports = app