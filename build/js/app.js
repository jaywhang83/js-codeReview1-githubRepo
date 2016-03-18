(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "e3fbc29b306bba3a6bd0115bf5680e178e3952d6"; 

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

exports.getRepo = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    console.log(JSON.stringify(response));
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
  return getRepo;
};

},{"./../.env":1}],3:[function(require,module,exports){
var getRepo = require('./../js/getRepo-interface.js').getRepo;

$(document).ready(function(){
  $('#input').submit(function(event) {
    event.preventDefault();
    var userName = $('#userName').val();
    console.log(userName);
    console.log("here");
    getRepo(userName);
  });

});

var apiKey = require('./../.env').apiKey;

exports.getRepo = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    console.log(JSON.stringify(response));
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
  return getRepo;
};

},{"./../.env":1,"./../js/getRepo-interface.js":2}]},{},[3]);
