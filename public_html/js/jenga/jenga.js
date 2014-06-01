var APPNAME = 'JengaScore';

require.config({
    waitSeconds: 180,
    paths:{
        knockout: '/' + APPNAME + '/js/libs/knockout/knockout-min',
        jquery: '/' + APPNAME + '/js/libs/jquery/jquery',
        jqueryui: '/' + APPNAME + '/js/libs/jquery/jquery-ui',
        vms: '/' + APPNAME + '/js/jenga/viewmodels',
        tmpls: '/' + APPNAME + '/templates/jenga'
    }
});

define(['order!knockout','order!vms/ScoreViewModel'], function(ko,svm){
    svm.initiateDisplay();
    ko.applyBindings(svm);
});