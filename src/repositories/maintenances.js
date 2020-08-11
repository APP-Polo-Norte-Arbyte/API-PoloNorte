const knex = require('../../database/indexDataBase')
const tableName = 'maintenances'

const create = async maintenance => {
    const [created] = await knex(tableName).returning('*').insert(maintenance)
    return created
}

module.exports = {
    create,
}