var apiKey = require('./../.env').apiKey;

exports.getRepo = function(userName) {
  var profile;
  $.get('https://api.github.com/users/'+ userName +'?access_token=' + apiKey)
  .then(function(response) {
    profile = response;
    return $.get('https://api.github.com/users/'+ userName +"/repos" +'?access_token=' + apiKey)})
    .then(function(repository) {
    $('#userInfo').html("<div class ='picture col-md-4'>" + "<img src= '" + profile.avatar_url +"'>" + "<p>" + profile.name + "</p>"+ "<p>" + profile.email + "</p>"+ "<a href ='" + profile.followers_url + "'>" + "Follwers: " + profile.followers + "</a> " + " <a href='" + profile.followers_url + "'>" + "Following: " + profile.following + "</a>" + "</div>");
    repository.forEach(function(repo) {
        $('#repos').append("<a href ='" + repo.html_url + "'>" + "<div class='col-md-4 box'>" + "<h4>Name: " + repo.name + "</h4>" + "<br />"
        + "<p>Created at: "+ moment(repo.created_at).format("MM/DD/YYYY") + "</p>" + "<br />"
        + "<p>Description: " + (repo.description === "" ? "n/a" : repo.description) + "</p>"  + "<br />"+ "</div>" + "</a>");
    });
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
  // return callBacks;
  return getRepo;
};
