/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Kai', function (table) {
    table.increments()
    table.string('kaiName')
    table.string('grownBy')
    table.integer('amount')
    table.string('location')
    table.date('expiry')
    table.string('status')
    table.boolean('availableNow')
    table.timestamps()
  })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('Kai')
}
