const moment = require("moment");
const { pool } = require("../database");

const getAllComments = () => {
  // remove id from returned property
  const queryText = `SELECT comment, ipaddress, filmid, createdon FROM comments ORDER BY id DESC`;
  const response = pool.query(queryText);
  return response;
};

const addComment = (req) => {
  const queryText = `INSERT INTO comments("createdon", "ipaddress", "comment", "filmid") VALUES($1, $2, $3, $4)
    RETURNING ipAddress, comment, filmID, createdOn`;
  const ipAddress =
    (typeof req.headers["x-forwarded-for"] === "string" &&
      req.headers["x-forwarded-for"].split(",").shift()) ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  const values = [
    moment(new Date()),
    ipAddress,
    req.body.comment,
    parseInt(req.body.filmID),
  ];
  const response = pool.query(queryText, values);
  return response;
};

module.exports = { getAllComments, addComment };
