var APPNAME = 'JengaScore';

require.config({
    paths:{
        knockout: '/' + APPNAME + '/js/libs/knockout/knockout-min',
        jquery: '/' + APPNAME + '/js/libs/jquery/jquery',
        jqueryui: '/' + APPNAME + '/js/libs/jquery/jquery-ui',
        vms: '/' + APPNAME + '/js/jenga/viewmodels',
        tmpls: '/' + APPNAME + '/templates/jenga'
    }
});

define(['knockout','jquery','vms/ScoreViewModel','jqueryui'], function(ko,$,svm){
    svm.initiateDisplay();
    ko.applyBindings(svm);
});