const tableName = 'maintenances'
exports.up = function (knex) {
    return knex.schema.createTable(tableName, (table) => {
        table.increments()
        table.integer('user_id').notNull().references('users.id')
        table.integer('equipment_id').notNull().references('equipments.id')
        table.string('description').notNull()
        table.timestamps()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable(tableName)
}
