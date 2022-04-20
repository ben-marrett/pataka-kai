const express = require('express')

const db = require('../db/db')

const router = express.Router()

//put routes here

router.get('/allKai', (req, res) => {
  db.getKai()
    .then((kai) => {
      res.json(kai)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// router.get('/allKai/:id', (req, res) => {
//   db.getKai()
//     .then((kai) => {
//       res.json(kai)
//     })
//     .catch((err) => {
//       res.status(500).send(err.message)
//     })
// })

module.exports = router
