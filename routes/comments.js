const express = require("express");
const router = express.Router();
const { getAllComments } = require("../database/queries");

router.get("/", (_, res) => {
  const getComments = getAllComments();
  getComments
    .then((result) => {
      res.status(200).json({
        success: true,
        error: false,
        message: "comments fetched successfully!",
        data: result.rows,
      });
    })
    .catch((error) => {
      res.status(400).json({
        message: error.message,
        status: "error",
        data: null,
      });
    });
});

module.exports = router;
