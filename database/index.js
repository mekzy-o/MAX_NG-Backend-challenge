const debug = require('debug');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();
const log = debug('dev');

const pool = new Pool({
  connectionString: process.env.NODE_ENV === 'test'
    ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL,
});

pool.on('connect', () => {
  log('connected to the db');
});

// pool.on('remove', () => {
//   log('client removed');
//   process.exit(0);
// });

/**
  * @function query
  * @description queries the db
  * @param {string} queryString - the query string
  * @param {any []} values - an array with values
  * for items specified as parameters in the query string
  * @returns {*} nothing
  */
const query = (queryString, values = []) => {
  try {
    return pool.query(queryString, values);
  } catch (err) {
    log(err);
  } finally {
    pool.end();
  }
};

module.exports={
    query,
    pool
};