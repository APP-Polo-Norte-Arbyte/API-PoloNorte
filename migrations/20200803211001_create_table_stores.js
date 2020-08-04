
const tableName = 'stores'
exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments()
        table.string('name').notNull()
        //chave primaria
        table.integer('customers_id').notNull().references('customers.id')
        table.timestamps()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)
}
