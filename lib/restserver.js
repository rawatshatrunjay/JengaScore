var express = require('express');
var bodyParser = require('body-parser');

var config = require('../config/config');
var playerRouter = require('./routes/player');
var logger = require('./logger').getLogger('RESTServer');
var app = express();
var server = null;
var root = config.restserver.root;
app.use(bodyParser.json());
app.use(root + '/players', playerRouter);

module.exports = {
  startServer: function startServer(callback) {
    logger.info('Starting Server on: ' + config.restserver.port);
    server = app.listen(config.restserver.port, callback);
  },
  stopServer: function stopServer(callback) {
    logger.info('Stopping Server on: ' + config.restserver.port);
    if(server) {
      server.close(callback);
    }
  }
};
