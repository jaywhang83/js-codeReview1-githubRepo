var getRepo = require('./../js/getRepo-interface.js').getRepo;

$(document).ready(function(){
  $('#input').submit(function(event) {
    event.preventDefault();
    var userName = $('#userName').val();
    getRepo(userName);
    $('#userName').val("");
  });

});

var apiKey = require('./../.env').apiKey;

exports.getRepo = function(userName) {
  var profile;
  $.get('https://api.github.com/users/'+ userName +'?access_token=' + apiKey)
  .then(function(response) {
    profile = response;
    return $.get('https://api.github.com/users/'+ userName +'/repos?access_token=' +  apiKey)})
    .then(function(repository) {
      console.log(repository);
    $('#userInfo').html("<div class ='picture col-md-3'>" +
                          "<img src= '" + profile.avatar_url +"'></div>"
                          + "<div class='info col-md-3'><div class='profile'><p>" + profile.name + "</p>"
                          + "<p>" + profile.email + "</p>"
                          + "<a href ='" + profile.followers_url + "'>" + "Follwers: " + profile.followers + "</a> "
                          + " <a href='" + profile.followers_url + "'>" + "Following: " + profile.following + "</a>"
                          + "</div></div>");
    repository.forEach(function(repo) {
        $('#repos').append("<a href ='" + repo.html_url + "'>"
                              + "<div class='col-md-4 box'>"
                                + "<h4>Name: " + repo.name + "</h4>"
                                + "<p>Created on: "+ moment(repo.created_at).format("MM/DD/YYYY") + "</p>"
                                + "<p>Description: " + (repo.description === "" ? "n/a" : repo.description) + "</p>"
                              + "</div>"
                            + "</a>");
    });
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
  return getRepo;
};
