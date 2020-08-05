const moment =require('moment')
const tableName = 'users'
const now = moment().toDate()
const {encryptPassword} = require('../src/services/utils/encrypt')

exports.seed = async function (knex) {
  const {salt,encryptedPassword} = encryptPassword('1234')

  await knex(tableName).del()
  return knex(tableName).insert([
    {
      name: 'Eu',
      email: 'luh.ana.af@gmail.com',
      cpf: '11111111111',
      password: encryptedPassword,
      salt: salt,
      created_at: now,
      updated_at: now
  }
  ]);
};
