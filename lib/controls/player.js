var logger = require('../logger').getLogger('PlayerControl');

var idSeq = 1;
var persistence = {};

var control = {
  addPlayer: function addPlayer(details, callback) {
    try {
      var player = new Player(details);
      logger.info('received player: ', player);
      persistence[player.id] = player;
      callback(null, player);
    } catch (err) {
      logger.error('Cannot add Player', err);
      callback(err);
    }
  },

  getPlayers: function getPlayers(callback) {
    var list = [];
    for(var id in persistence) {
      list.push(persistence[id]);
    }
    if(list.length) {
      callback(null, list);
    } else {
      var err = new Error('No players in record');
      err.reason = 'NOT_FOUND';
      callback(err);
    }
  },

  getPlayer: function getPlayer(id, callback) {
    if(persistence[id]) {
      callback(null, persistence[id]);
    } else {
      var err = new Error('Player not found');
      err.propertyName = 'id';
      err.propertyValue = id;
      err.reason = 'NOT_FOUND';
      callback(err);
    }
  },

  updatePlayer: function updatePlayer(id, details, callback) {
    if(!persistence[id]) {
      var err = new Error('Player not found');
      err.propertyName = 'id';
      err.propertyValue = id;
      err.reason = 'NOT_FOUND';
      callback(err);
    } else if(!details) {
      var err = new Error('Player details were not provided');
      err.propertyName = '$root';
      err.propertyValue = 'null';
      err.reason = 'BAD_DATA';
      callback(err);
    } else {
      var player = persistence[id];
      player.name = details.name || player.name;
      player.score = details.score || player.score;
      persistence[id] = player;
      callback(null, player);
    }
  },

  deletePlayer: function deletePlayer(id, callback) {
    if(!persistence[id]) {
      var err = new Error('Player not found');
      err.propertyName = 'id';
      err.propertyValue = id;
      err.reason = 'NOT_FOUND';
      callback(err);
    } else {
      var player = persistence[id];
      delete persistence[id];
      callback(null, player);
    }
  }
};

var Player = function Player(details) {

  var _this = this;
  this.id;
  this.name;
  this.score;

  var validate = function validate() {
    if(!details) {
      var err = new Error('Player details were not provided');
      err.propertyName = '$root';
      err.propertyValue = 'null';
      err.reason = 'BAD_DATA';
      throw err;
    }
    if(!details.name) {
      var err = new Error('Player must have a name');
      err.propertyName = 'name';
      err.propertyValue = 'null';
      err.reason = 'BAD_DATA';
      throw err;
    }
  };

  var setupPlayer = function setupPlayer() {
    _this.id = idSeq++;
    _this.name = details.name;
    _this.score = details.score || 0;
  };

  validate();
  setupPlayer();
};

module.exports = control;
