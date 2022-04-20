const config = require('./knexfile').development

const connection = require('knex')(config)

function getAllKai(db = connection) {
  return db('Kai')
    .select()
    .then((kai) => {
      return kai.map((kai) => {
        return {
          id: kai.id,
          kaiName: kai.kaiName,
          grownBy: kai.grownBy,
          location: kai.location,
          expiry: kai.expiry,
          amount: kai.amount,
          availableNow: kai.availableNow,
        }
      })
    })
}

function getKaiItem(id, db = connection) {
  return db('Kai')
    .where('id', id)
    .then((kai) => {
      const item = kai[0]
      return {
        id: item.id,
        kaiName: item.kaiName,
        grownBy: item.grownBy,
        location: item.location,
        expiry: item.expiry,
        amount: item.amount,
        availableNow: item.availableNow,
      }
    })
}

module.exports = { getAllKai, getKaiItem }
