const knex = require('../../database/indexDataBase')
const User = require('../models/User')
const moment = require('moment')
const tableName = 'users'

// SELECT * FROM users WHHERE ?=?
const getOne = async params => {
    const [user] = await knex(tableName).where(params)
    return new User(user)
}
const update = (id, data) => {
    data.updated_at = moment().utc().format()
    return knex(tableName)
        .where({ id: id })
        .update(data)
}

module.exports = {
    getOne,
    update
}