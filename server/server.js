const path = require('path')
const express = require('express')

const server = express()

const kaiRoutes = require('./routes/kaiRoutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/kai', kaiRoutes)

module.exports = server
