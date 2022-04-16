exports.seeds = (knex) => {
  return knex('Kai')
    .del()
    .then(() => {
      return knex('Kai').insert([{
        id:
        
      }])
    })
}
