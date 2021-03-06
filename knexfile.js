
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

}

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

