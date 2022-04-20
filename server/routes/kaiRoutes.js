const express = require('express')

const db = require('../db/db')

const router = express.Router()

//routes

router.get('/allKai', (req, res) => {
  db.getAllKai()
    .then((kai) => {
      res.json(kai)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.get('/allKai/:id', (req, res) => {
  const id = req.params.id
  db.getKaiItem(id)
    .then((kai) => {
      res.json(kai)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

router.post('/allKai', (req, res) => {
  const newKaiData = req.body
  db.addKai(newKaiData)
    .then((id) => {
      const newKai = id[0]
      return db.getKaiItem(newKai)
    })
    .then((newJson) => {
      res.json(newJson)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
