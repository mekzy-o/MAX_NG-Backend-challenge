/* eslint-disable no-unused-vars */

const dbClient = require('./index');

const queryString = `
CREATE TABLE IF NOT EXISTS Comments(
    id SERIAL UNIQUE PRIMARY KEY,
    comment VARCHAR(500) NOT NULL,
    ipAddress VARCHAR(250) NOT NULL, 
    filmID INT NOT NULL,
    createdOn DATE DEFAULT CURRENT_TIMESTAMP
  );
`;

dbClient.query(queryString);