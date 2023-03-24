const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')


// const dotenv = require('dotenv');
// dotenv.config()

const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const nonAuthURL=[
  '/user/login',
  '/user/add'
]


const auth = require("./middleware/auth");

 app.use(async (req, res, next) => {
  if (!nonAuthURL.includes(req.url)) {
     //app.use(auth)
     auth(req,res,next)
  }
  next();
})

const indexRouter = require('./routes/Index')
const visitorRouter = require('./routes/visitor')
const countryRouter = require('./routes/country')
const cityRouter = require('./routes/city')
const userRouter = require('./routes/user')

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
app.use('/city', cityRouter)
app.use('/user', userRouter)

module.exports = app