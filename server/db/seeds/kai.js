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
      kaiName: 'Pumpkin',
      grownBy: 'Ben Marrett',
      location: 'Monty ave, Dargaville',
      expiry: 'October 2022',
      amount: '2',
      availableNow: true,
    },
    {
      id: 2,
      kaiName: 'Cabbage',
      grownBy: 'Jacqui Hart',
      location: 'Dunn Road, Ruawai',
      expiry: '30 April 2022',
      amount: '12',
      availableNow: true,
    },
    {
      id: 3,
      kaiName: 'Guava',
      grownBy: 'Doug',
      location: 'Monty ave, Dargaville',
      expiry: 'May 2022',
      amount: '2kg',
      availableNow: true,
    },
    {
      id: 4,
      kaiName: 'Onion',
      grownBy: 'Api',
      location: 'Te Maire',
      expiry: 'August 2022',
      amount: '50',
      availableNow: false,
    },
  ])
}
