# MAX_NG-Backend-challenge

Backend coding challenge for MAX_NG

[![Build Status](https://www.travis-ci.com/mekzy-o/MAX_NG-Backend-challenge.svg?token=eLwsKntexVZ2cSbss8k8&branch=develop)](https://www.travis-ci.com/mekzy-o/MAX_NG-Backend-challenge)
[![npm version](https://badge.fury.io/js/express.svg)](https://badge.fury.io/js/express)
[![Code style: airbnb](https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Introduction](#introduction)
- [API](#api)
- [Docker Image](#api-documentation)
- [Technologies](#technologies)
- [Installing](#installing)
- [Working Routes](#working-routes)
- [License](#license)

# Introduction

## _Project Overview_

Quick Credit is an online lending platform that provides short term soft loans to individuals earning low-income. Loans are provided instantly upon administrator approval.

### **Style guide**

[Airbnb ](https://github.com/airbnb/javascript)(Javascript style guide)

## Screenshot(UI template)

![quickcredit](https://user-images.githubusercontent.com/40548599/56082718-eb80ff00-5e13-11e9-9f35-90b4bff1f4cf.PNG)

# API

The API is currently in version 1 (v1) and is hosted at https://max-ng.herokuapp.com/


# Docker Image

The Docker Image can be pulled using this command: 

# Pivotal Tracker ID

https://www.pivotaltracker.com/n/projects/2326723

## Required Features

- Get all movies list.
- Get all characters in a movie list.
- Get all comments of movies
- Add comments to movies

# Technologies

- NodeJs
- Express
- Cloud SQL (Elephant SQL)
- Jest
- ESLint
- Travis
- Docker

# Installing

#### _Prerequisites_

Ensure you have **NodeJS** installed by entering `node -v` on your terminal
If you don't have **NodeJS** installed, go to the [NodeJS Website](http://nodejs.org), and follow the download instructions

To install this app

`git clone https://github.com/mekzy-o/MAX_NG-Backend-challenge.git`

And install the required dependencies

`npm install`

Run server

`npm run dev`

Server listens on port `3000`

## Running the tests

To run test cases

`npm test`

# Working Routes

## _API Endpoints_

| Endpoint                                              |                      Functionality                      | HTTP method |
| ----------------------------------------------------- | :-----------------------------------------------------: | ----------: |
| /movies                                               |                     Get movie list                      |         GET |
| /movies/:movieId/characters                           |                Get characters in a movie                |         GET |
| /movies/:movieId/characters?sortBy=name&orderBy='ASC' | Sorts Character in a movies by name and ascending order |         GET |
| /movies/:movieId/characters?sortBy=name&orderBy='DESC' | Sorts Character in a movies by name and descending order |         GET |
| /movies/:movieId/characters?sortBy=height&orderBy='ASC' | Sorts Character in a movies by height and ascending order |         GET |
| /movies/:movieId/characters?sortBy=height&orderBy='DESC' | Sorts Character in a movies by height and descending order |         GET |
| /movies/:movieId/characters?gender=male | filter characters in a movie by male gender |         GET |
| /movies/:movieId/characters?gender=female | filter characters in a movie by female gender |         GET |
| /comments                                             |                    Get all comments                     |        POST |
| /movies/:movieId/comments                             |                 add comment to a movie                  |         GET |

## License :boom:

This project is under the MIT LICENSE
