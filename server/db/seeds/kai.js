/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('Kai').del()
  await knex('Kai').insert([
    {
      id: 1,
      kaiName: 'pumpkin',
      grownBy: 'Ben Marrett',
      location: 'Monty ave, Dargaville',
      expiry: '',
    },
    {
      id: 2,
      kaiName: 'cabbage',
      grownBy: 'Jacqui Hart',
      location: 'Dunn Road, Ruawai',
      expiry: '',
    },
    {
      id: 3,
      kaiName: 'guava',
      grownBy: 'Doug',
      location: 'Monty ave, Dargaville',
      expiry: '',
    },
  ])
}
