const wordModel = require('../model/word');
const express = require('express');

const route = express.Router();

route.get('/word', function(req, res, next){
  wordModel.aggregate([{ $sample: {size:1}}])
  .then(function(word){
    console.log(word)
    res.send(word);
  })
  .catch(next)
});

module.exports = route;