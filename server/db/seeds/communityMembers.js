exports.seeds = (knex) => {
  return knex('Users')
    .del()
    .then(() => {
      return knex('Users').insert([
        {
          id: 1,
          fullName: 'Ben Marrett',
          location: 'Dargaville',
          contact: 'benteikoatgmail.com',
        },
        {
          id: 2,
          fullName: 'Jonny Boy',
          location: 'Maungaturoto',
          contact: 'dont talk to me',
        },
        {
          id: 3,
          fullName: 'Cedric',
          location: 'Kai Iwi',
          contact: 'ondawater',
        },
        {
          id: 4,
          fullName: 'Tobz',
          location: 'Dargaville',
          contact: 'thartatgmail.com',
        },
      ])
    })
}
