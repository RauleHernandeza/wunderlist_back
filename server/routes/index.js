const express = require('express')
const app = express.Router()

app.use('/login',require('./login'));
app.use('/registro',require('./registro'));
app.use('/task',require('./task'));
module.exports = app;
