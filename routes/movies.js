const express = require('express');
const request = require('request');
const rp = require('request-promise');
const fetch = require('node-fetch');
const router = express.Router();
const sortByReleaseDate = require('../utils/sortByReleaseDate');

/* GET movies listing. */
router.get('/', (_, res, next) => {
   const moviesUrl = 'https://swapi.dev/api/films/'
   request(moviesUrl, function(error, response, body){
     try{
       const results = JSON.parse(body).results;
        return res.status(response.statusCode).json({
           success: error ? false : true,
           error: error ? true : false,
           message: error ? error.message: 'Movies fetched successfully!',
           data: error ? null: results.sort(sortByReleaseDate)
        })
      }
     catch({message}){
      res.status(400).json({
        message,
        status: 'error',
        data: null,
      });
    }
  });
    
});


router.get('/:id/characters', (req, res, next) => {
  const moviesUrl = 'https://swapi.dev/api/films/';
  const {id} = req.params;
  const {sortBy, orderBy, gender} = req.query;

  const fetchMovies  = fetch(moviesUrl).then(res => res.json()).then(json => json.results);
  const characterResultsURL = fetchMovies.then(res => res.filter(item => item['episode_id'] == id).map(item => item.characters));
  const fetchCharacterResults = characterResultsURL.then(item => item[0].map(item => fetch(item)))
  fetchCharacterResults.then(res => Promise.all(res)).then(res => res).then(res => Promise.all(res.map(res => res.json())))
  .then(res => {
      if(!!(sortBy && orderBy)){
      res = orderBy =='ASC' ? res.sort(sortByAscending(sortBy)) : res.sort(sortByDescending(sortBy))
      };
      if(gender){
          res = res.filter((character) => character.gender == gender)
      }
      return {
         success: true,
         error: false,
         message: 'Characters List fetched successfully!',
         data: res
      }
  }).catch(error => {
    res.status(400).json({
      message: error.message,
      status: 'error',
      data: null,
    });
  })

 });
   


module.exports = router;
