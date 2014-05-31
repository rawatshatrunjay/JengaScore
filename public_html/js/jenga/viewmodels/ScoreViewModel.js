define(['knockout','jquery'], function(ko, $){
    
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
        
        this.showAddPlayerDialog = function(){
            
        };
        
        this.hideAddPlayerDialog = function(){
            
        };
        
        this.addPlayer = function(){
            if(_self.newPlayerName()){
                var newPlayer = new Player(_self.newPlayerName);
                _self.playerList.push(newPlayer);
            }
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