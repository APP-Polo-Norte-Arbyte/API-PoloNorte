const knex = require('../../database/indexDataBase')
const User = require('../models/User')
const tableName = 'users'

// SELECT * FROM users WHHERE ?=?
const getOne = async params => {
    const [user] = await knex(tableName).where(params)
    return new User(user)
}

module.exports = {
    getOne
}