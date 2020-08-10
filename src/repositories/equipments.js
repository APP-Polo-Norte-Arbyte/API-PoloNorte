const knex = require('../../database/indexDataBase')
const Equipment = require('../models/Equipment')
const tableName = 'equipments'

const getById = async id => {
    const [equipment] = await knex(tableName)
        .where({ id: id })
    return new Equipment(equipment)
}

module.exports = {
    getById
}