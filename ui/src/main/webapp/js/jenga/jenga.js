require.config({
    waitSeconds: 180,
    paths:{
        knockout: '../libs/knockout/knockout-min',
        jquery: '../libs/jquery/jquery',
        jqueryui: '../libs/jquery/jquery-ui',
        vms: '../jenga/viewmodels'
    }
});

define(['knockout','jquery','vms/ScoreViewModel'], function(ko,$,svm){
    $(document).ready(function(){
        svm.initiateDisplay();
        ko.applyBindings(svm);
    });
});