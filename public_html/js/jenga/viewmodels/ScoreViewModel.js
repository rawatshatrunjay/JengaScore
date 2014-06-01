define(['knockout','order!jquery','order!jqueryui']
    , function(ko, $){
    
        function ScoreViewModel(){
            var _self = this;

            this.initiateDisplay = function(){
                $("#loading-div").hide('blind',{},400, function(){
                    $("#content-body").show('blind',{},400);
                });

            };
            this.gameBegun = ko.observable(false);
            this.gameOver = ko.observable(false);
            this.gameScore = ko.observable(0);
            this.newPlayerName = ko.observable();
            this.playerList = ko.observableArray();
            this.currentPlayer = ko.observable();
            this.sticksDisplaced = ko.observable(0);
            this.specialStick = ko.observable(false);
            this.completedLevel = ko.computed(function(){
                return parseInt(_self.sticksDisplaced() / 3);
            });
            /*this.buildingLevel = ko.computed(function(){
                return this.completedLevel + 1;
            });*/
            this.computeStickValue = function(){
                var buildingLevel = parseInt(_self.sticksDisplaced() / 3) + 1;
                if(_self.specialStick()){
                    buildingLevel++;
                }
                return buildingLevel;
            };
            this.currentStickValue = ko.computed(function(){
                return _self.computeStickValue();
            });
            this.options = ko.observableArray([
                {caption: "Add Player", icon: "fa-user", action: function(){
                        _self.toggleAddPlayerDialog();
                },isVisible: ko.observable(true)},
                {caption: "Show Rules", icon: "fa-check-square", action: function(){
                        _self.toggleRulesDialog();
                },isVisible: ko.observable(true)},
                {caption: "Start Game!", icon: "fa-play", action: function(){
                        _self.startGame();
                },isVisible: ko.computed(function(){
                    return _self.playerList().length > 1 && !_self.gameBegun();
                })}
            ]);
            
            this.startGame = function(){
                _self.gameBegun(true);
                _self.gameOver(false);
                this.resetScores();
            };
            
            this.resetScores = function(){
                _self.currentPlayer(_self.playerList()[0]);
                this.sticksDisplaced(0);
                this.gameScore(0);
                this.specialStick(false);
                
                for(var player in this.playerList()){
                    if(this.playerList().hasOwnProperty(player)){
                        var playerModel = this.playerList()[player];
                        playerModel.score(0);
                    }
                }
            };
            
            this.endGame = function(){
                 _self.gameBegun(false);
                 _self.gameOver(true);
            };

            this.toggleAddPlayerDialog = function(){
                $("#rules-dialog").hide();
                $("#add-player-dialog").toggle('blind',{},400);
            };

            this.resetAddPlayerDialog = function(){
                this.newPlayerName("");
                $("#add-player-dialog").hide('blind',{},400);
            };

            this.toggleRulesDialog = function(){
                $("#add-player-dialog").hide();
                $("#rules-dialog").toggle('blind',{},400);
            };

            this.addPlayer = function(){
                if(_self.newPlayerName()){
                    var newPlayer = new Player(_self.newPlayerName());
                    _self.playerList.push(newPlayer);
                }
                _self.resetAddPlayerDialog();
            };
            
            this.didIt = function(){
                this.currentPlayer().addScore(this.computeStickValue());
                this.gameScore(this.gameScore() + this.computeStickValue());
                this.nextPlayer();
                this.sticksDisplaced(this.sticksDisplaced() + 1);
                this.specialStick(false);
                this.highlightPlayerChange();
            };
            
            this.highlightPlayerChange = function(){
                $(".turn-play").toggle('highlight',{},400,function(){
                    $(".turn-play").toggle('highlight',{},400);
                });
            };
            
            this.nextPlayer = function(){
                var currPlayerIdx = _self.playerList.indexOf(_self.currentPlayer());
                var nextPlayerIdx = (currPlayerIdx + 1) % _self.playerList().length;
                _self.currentPlayer(_self.playerList()[nextPlayerIdx]);
            };
            
            this.didNot = function(){
                _self.endGame();
                this.currentPlayer().reduceScore(this.computeStickValue());
                this.gameScore(this.gameScore() - this.computeStickValue());
                
            };
            
            this.upLoad = function(){
                alert("We still need a back end for this. Siva? How about it?");
            };
            
            this.infoCard = ko.observableArray([
                {infoDesc: "Total Blocks Displaced", infoValue: ko.computed(function(){
                        return _self.sticksDisplaced();
                })},
                {infoDesc: "Current Level", infoValue: ko.computed(function(){
                        return parseInt(_self.sticksDisplaced() / 3) + " and "
                                + _self.sticksDisplaced() % 3 + " Blocks ";
                })},
                {infoDesc: "Total score of Game", infoValue: ko.computed(function(){
                        return _self.gameScore();
                })},
                {infoDesc: "Leader", infoValue: ko.computed(function(){
                        var maxScore = 0;
                        var leader;
                        var leaderName = "";
                        
                        for(var player in _self.playerList()){
                            if(_self.playerList().hasOwnProperty(player)){
                                var playerModel = _self.playerList()[player];
                                if(playerModel.score() > maxScore){
                                    maxScore = playerModel.score();
                                    leader = playerModel;
                                    leaderName = playerModel.name;
                                }else if(playerModel.score() === maxScore){
                                    leaderName += (leaderName? " & ": "") + playerModel.name;
                                }
                            }
                        }
                        return leaderName;
                })}
            ]);
        }

        function Player(name){
            var _self = this;

            this.name = name;
            this.score = ko.observable(0);

            this.addScore = function(score){
                _self.score(_self.score() + score);
            };
            
            this.reduceScore = function(score){
                _self.score(_self.score() - score);
            };
        }
        
        return new ScoreViewModel();
    });