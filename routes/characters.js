const express = require('express');
const request = require('request');
const router = express.Router();
const {sortByAscending, sortByDescending } = require('../utils/sortCharacters');

/* GET characters listing. */
router.get('/', (req, res, next) => {
   const charactersUrl = 'https://swapi.dev/api/people/';
   const {sortBy, orderBy, gender} = req.query;

   request(charactersUrl, function(error, response, body){

    // Transform height value from string to number
    let results = JSON.parse(body).results.map((item) => ({...item, height:Number(item.height)}));
     try{
        if(!!(sortBy && orderBy)){
        results = orderBy =='ASC' ? results.sort(sortByAscending(sortBy)) : results.sort(sortByDescending(sortBy))
        };
        if(gender){
            results = results.filter((character) => character.gender == gender)
        }
        return res.status(response.statusCode).json({
           success: error ? false : true,
           error: error ? true : false,
           message: error ? error.message: 'Characters List fetched successfully!',
           data: error ? null: results
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


module.exports = router;