var express = require('express');
var router = express.Router();

var Flickr = require("flickrapi");
var conf = require('../env/app.conf');

var QUERY = {
  dogs: {
    text: "cute+dog"
  }
};

Flickr.tokenOnly(conf.flickr, function (error, flickr) {
  router.get('/dogs', function (req, res) {

    var proxy_callback = function (error, result) {
      if (error) {
        throw new Error(error);
      }
      return res.send(result);
    };

    return flicókr.photos.search(QUERY.dogs, proxy_callback);
  });

  router.get('/byUser/:userId', function (req, res) {

    var proxy_callback = function (error, result) {
      if (error) {
        throw new Error(error);
      }
      return res.send(result);
    };

    return flicókr.photos.search(QUERY.dogs, proxy_callback);
  });
});

module.exports = router;
