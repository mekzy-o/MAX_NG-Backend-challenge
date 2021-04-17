require("dotenv").config();

const env = process.env.ENV || process.env.NODE_ENV;

console.log(env);

const dbConfig = {
  test: {
    user: "postgres",
    database: "testdb",
    password: "",
  },
  dev: {
    connectionString: process.env.DATABASE_URL,
  },
  production: {
    connectionString: process.env.DATABASE_URL,
  },
  staging: {
    connectionString: process.env.DATABASE_URL,
  },
};

let credentials = dbConfig[env];
if (!credentials) credentials = dbConfig.dev;

const config = credentials;

module.exports = config;
