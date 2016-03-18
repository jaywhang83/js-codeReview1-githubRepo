var getRepo = require('./../js/getRepo-interface.js').getRepo;

$(document).ready(function(){
  $('#input').submit(function(event) {
    event.preventDefault();
    var userName = $('#userName').val();
    getRepo(userName);
  });

});

var apiKey = require('./../.env').apiKey;

exports.getRepo = function(userName) {
  var githubRepo;
  $.get('https://api.github.com/users/'+ userName + "/repos"+'?access_token=' + apiKey).then(function(response) {
    githubRepo = response;
    $('#userInfo').html("<img src= '" + response[0].owner.avatar_url +"'>");
    response.forEach(function(repo) {
      console.log(repo);
        $('#repos').append("<div class='col-md-4 box'>" + "<h4>Name: " + repo.name + "</h4>" + "<br />"
        + "<p>Created at: "+ moment(repo.created_at).format("MM/DD/YYYY") + "</p>" + "<br />"
        + "<p>Description: " + (repo.description === "" ? "n/a" : repo.description) + "</p>"  + "<br />"+ "</div>");
    });
  }).fail(function(error) {

    console.log(error.responseJSON.message);
  });
  return getRepo;
};
