const express = require('express')
const router = require('./router')
const morgan = require('morgan')
const errorhandler = require('errorhandler')
require('./model')
const path = require("path");

const app = express()

app.use('/public', express.static(path.join(__dirname, './public')))

app.engine('html', require('express-art-template'))
app.set('views', {
    debug: process.env.NODE_ENV !== 'production'
})
app.set('views', path.join(__dirname, 'views'))
app.set('views engine', 'html')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const PORT = process.env.PORT || 3000

app.use(router)

if (process.env.NODE_ENV === 'development') {
    // only use in development
    app.use(errorhandler())
}

app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`)
})