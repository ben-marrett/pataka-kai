const request = require('supertest')
const server = require('../../server')
const db = require('../../db/db')

jest.mock('../../db/db')

describe('GET /', () => {
  test('gets all the kai in the db', () => {
    db.getAllKai.mockReturnValue(
      Promise.resolve([
        {
          id: 88,
          kaiName: 'Asparagus muffins',
          grownBy: 'Deirdre',
          location: 'Doon the road',
          expiry: 'never',
          amount: 'heaps',
          availableNow: true,
        },
        {
          id: 99,
          kaiName: 'Strawberry Jam',
          grownBy: 'Jonny',
          location: 'Up the road',
          expiry: 'tomorrow',
          amount: 'a jar',
          availableNow: true,
        },
      ])
    )
    expect.assertions(2)
    return request(server)
      .get('/kai/allKai')
      .then((res) => {
        expect(res.text).toContain('Deirdre')
        expect(res.text).toContain('Jonny')
      })
  })
})
