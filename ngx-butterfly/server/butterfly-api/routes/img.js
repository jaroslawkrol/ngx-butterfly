var express = require('express');
var router = express.Router();

var http = require('http');

/* flickr images proxy */
router.get('/:farm/:server/:id/:secret', function (req, res) {

  var generateOptions = function (params) {
    return {
      host: "farm" + req.params.farm + ".staticflickr.com",
      path: "/" + req.params.server + "/" + req.params.id + "_" + req.params.secret + ".jpg"
    }
  };

  var callback = function (response) {
    if (response.statusCode === 200) {
      res.writeHead(200, {
        'Content-Type': response.headers['content-type']
      });
      response.pipe(res);
    } else {
      res.writeHead(response.statusCode);
      res.end();
    }
  };

  http.request(generateOptions, callback).end();
});

module.exports = router;
