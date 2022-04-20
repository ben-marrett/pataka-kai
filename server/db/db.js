const config = require('./knexfile').development

const connection = require('knex')(config)

function getKai(db = connection) {
  return db('Kai')
    .select()
    .then((kai) => {
      return kai.map((kai) => {
        return {
          id: kai.id,
          kaiName: kai.kaiName,
          grownBy: kai.grownby,
          location: kai.location,
          expiry: kai.expiry,
          amount: kai.amount,
          availableNow: kai.availableNow,
        }
      })
    })
}

module.exports = { getKai }
