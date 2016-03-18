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
