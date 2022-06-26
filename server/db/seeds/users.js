/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      fullName: 'Ben Morrin',
      location: 'Dargavillion',
      contact: 'benatgmail.com',
    },
    {
      id: 2,
      fullName: 'Jacques Hart',
      location: 'Doop Road, Ruawai',
      contact: 'call 572140',
    },
    {
      id: 3,
      fullName: 'Cedric',
      location: 'Kai Iwi',
      contact: 'email kai@iwi.com',
    },
    {
      id: 4,
      fullName: 'Tobi Hertz',
      location: 'Dargaville',
      contact: 'thartatgmail.com',
    },
    {
      id: 5,
      fullName: 'Doug Jacobson',
      location: 'Dargaville',
      contact: 'call 575575',
    },
  ])
}
