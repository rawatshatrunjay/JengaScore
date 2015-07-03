var express = require('express');
var router = express.Router();

var logger = require('../logger').getLogger('PlayerRoute');
var control = require('../controls/player');

var handleError = function handleError(err, req, res) {
  if(err.reason === 'BAD_DATA') {
    res.status(400).json({error: err.message});
  } else if(err.reason === 'NOT_FOUND') {
    res.sendStatus(404);
  } else {
    res.status(500).json({error: err.message});
  }
};

router.post('/', function(req, res) {
  var payload = req.body;
  logger.info('request for adding new player', payload);
  control.addPlayer(payload, function(err, player) {
    if(err) {
      logger.error('Unable to add new player.', err);
      handleError(err, req, res);
      return;
    }
    logger.info('Player created. ', player);
    res.status(200).json(player);
  });
});

router.get('/', function(req, res) {
  logger.info('request for getting player list');
  control.getPlayers(function(err, players) {
    if(err) {
      handleError(err, req, res);
      return;
    }
    logger.info('Players fetched. ', players);
    res.status(200).json(players);
  });
});

router.get('/:id', function(req, res) {
  logger.info('request for getting player', req.params.id);
  control.getPlayer(req.params.id, function(err, player) {
    if(err) {
      handleError(err, req, res);
      return;
    }
    res.status(200).json(player);
  });
});

router.put('/:id', function(req, res) {
  var payload = req.body;
  logger.info('request for updating player', req.params.id, payload);
  control.updatePlayer(req.params.id, payload, function(err, player) {
    if(err) {
      handleError(err, req, res);
      return;
    }
    res.status(200).json(player);
  });
});

router.delete('/:id', function(req, res) {
  logger.info('request for deleting player', req.params.id);
  control.deletePlayer(req.params.id, function(err, player) {
    if(err) {
      handleError(err, req, res);
      return;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
