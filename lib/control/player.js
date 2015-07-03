var idSequencer = 0;
var persistence = {};

var control = {
  addPlayer : function addPlayer(details, callback) {
    try {
      var player = new Player(details);
      persistence[player.id] = player;
      callback(null, player);
    } catch (err) {
      callback(err, null);
    }
  },

  getPlayers: function getPlayers(callback) {

  }
};

var Player = function Player(details) {

  var validateDetails = function validateDetails() {
    if(!details.name) {
      throw new Error("Player must have a name");
    }
  };

  var initiatePlayer = function initiatePlayer() {
    this.name = details.name;
    this.score = parseInt(details.score, 10) || 0;
  };

  validateDetails();
  initiatePlayer();
};

module.exports = control;
