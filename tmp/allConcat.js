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
