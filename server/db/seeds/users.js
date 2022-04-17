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
      fullName: 'Ben Marrett',
      location: 'Dargaville',
      contact: 'benteikoatgmail.com',
    },
    {
      id: 2,
      fullName: 'Jacqui Hart',
      location: 'Dunn Road, Ruawai',
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
      fullName: 'Tobi Hart',
      location: 'Dargaville',
      contact: 'thartatgmail.com',
    },
    {
      id: 5,
      fullName: 'Doug Phillips',
      location: 'Dargaville',
      contact: 'call 575575',
    },
  ])
}
