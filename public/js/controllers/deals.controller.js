/**
 * Created by dlu on 10/30/2015.
 */

var app = angular.module('dealsApp', ['smart-table']);

app.controller('dealsCtrl', dealsCtrl);

function dealsCtrl($http) {

    var deals = this;
    deals.result = [];
    $http.get('cards.json').then(function(response) {
        //window.localStorage['result'] = response.data;
        deals.result = response.data;
        console.log(deals.result);
        deals.data = response.data;

    });
    //deals.callServer = function callServer(){
    //    $http.get('cards.json').then(function(response) {
    //        deals.result = response.data;
    //    });
    //};
    //deals.result = window.localStorage['result'];

    //
    //var promise = $http.get('cards.json').then(function (response) {
    //    return JSON.parse(JSON.stringify(response.data));
    //});
    //console.log(promise.value);
    //deals.result = JSON.parse(JSON.stringify($http.get('cards.json').data));

    //deals.seeResult = function(){
    //
    //    basicServices.getJsonDetails('cards.json').then(function (result) {
    //        deals.result = result;
    //    });
    //
    //};



}
