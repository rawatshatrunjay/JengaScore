define(['knockout','jquery']
    , function(ko, $){
    
        function ScoreViewModel(){
            var _self = this;

            this.initiateDisplay = function(){
                $("#loading-div").hide('blind',{},400, function(){
                    $("#content-body").show('blind',{},400);
                });

            };

            this.newPlayerName = ko.observable();
            this.playerList = ko.observableArray();
            this.currentLevel = ko.observable(1);
            this.options = ko.observableArray([
                {caption: "Add Player", icon: "fa-user", action: function(){
                        _self.toggleAddPlayerDialog();
                }},
                {caption: "Show Rules", icon: "fa-check-square", action: function(){
                        _self.toggleRules();
                }}
            ]);

            this.toggleAddPlayerDialog = function(){
                $("#add-player-dialog").toggle('blind',{},400);
            };

            this.resetAddPlayerDialog = function(){
                this.newPlayerName("");
                $("#add-player-dialog").hide('blind',{},400);
            };

            this.toggleRules = function(){
                alert("show rules");
            };

            this.addPlayer = function(){
                if(_self.newPlayerName()){
                    var newPlayer = new Player(_self.newPlayerName);
                    _self.playerList.push(newPlayer);
                }
                _self.resetAddPlayerDialog();
            };
        }

        function Player(name){
            var _self = this;

            this.name = name;
            this.score = ko.observable(0);

            this.addScore = function(score){
                _self.score(_self.score() + score);
            };
        }
        
        return new ScoreViewModel();
    });