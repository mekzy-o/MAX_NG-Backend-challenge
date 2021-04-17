const dbClient = require("./index");

const queryString = "DROP TABLE IF EXISTS comments CASCADE";

dbClient.query(queryString);
