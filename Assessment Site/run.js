const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const index_router = require('./routes/index')
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('assets'))
app.use("/", index_router)