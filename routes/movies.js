const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const sortByReleaseDate = require("../utils/sortByReleaseDate");
const {
  sortByAscending,
  sortByDescending,
} = require("../utils/sortCharacters");
const { addComment } = require("../database/queries");

/* GET movies listing. */
router.get("/", (_, res, next) => {
  const moviesUrl = "https://swapi.dev/api/films/";
  fetch(moviesUrl)
    .then((result) => result.json())
    .then((result) => {
      const { results } = result;
      const transformedResults = results.map(
        ({ title, episode_id, opening_crawl, release_date }) => ({
          title,
          episode_id,
          opening_crawl,
          comment: 0,
          release_date,
        })
      );
      return res.status(200).json({
        success: true,
        error: false,
        message: "Movies fetched successfully!",
        data: transformedResults.sort(sortByReleaseDate),
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

//Endpoint to get character in a movie by passing in a film id
router.get("/:id/characters", (req, res) => {
  const { id } = req.params;
  const moviesUrl = `https://swapi.dev/api/films/${id}`;
  const { sortBy, orderBy, gender } = req.query;
  fetch(moviesUrl)
    .then((result) => result.json())
    .then((result) => {
      Promise.all(
        result.characters.map((character) =>
          fetch(character).then((res) => res.json())
        )
      ).then((results) => {
        results = results.map(({ name, height, gender, url, created }) => ({
          name,
          height: Number(height),
          gender,
          url,
          created,
        }));
        if (!!(sortBy && orderBy)) {
          results =
            orderBy == "ASC"
              ? results.sort(sortByAscending(sortBy))
              : results.sort(sortByDescending(sortBy));
        }
        if (gender) {
          results = results.filter((item) => item.gender == gender);
        }
        res.status(200).json({
          success: true,
          error: false,
          message: "Movie Characters fetched successfully!",
          data: results,
        });
      });
    })
    .catch((error) => console.log(error));
});

// Endpoint to add comments to a movie
/*
  Due to limited time, I did not map the comment count to movies list gotten from swap
*/

router.post("/:id/comments", (req, res) => {
  const addMovieComment = addComment(req);
  addMovieComment
    .then((result) => {
      res.status(200).json({
        success: true,
        error: false,
        message: "comments posted to movie successfully!",
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
