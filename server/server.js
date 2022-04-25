const path = require('path')
const express = require('express')

const server = express()

const kaiRoutes = require('./routes/kaiRoutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/kai', kaiRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
