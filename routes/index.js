var express = require('express');
var router = express.Router();
var request = require('request');

const rootURL = 'https://api.chucknorris.io/jokes/random';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res, next) {
  request(
    rootURL, function(err, response) {
      res.render('index');

    }
    )
})

module.exports = router;
