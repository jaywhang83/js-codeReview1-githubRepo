var apiKey = require('./../.env').apiKey;

exports.getRepo = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    console.log(JSON.stringify(response));
    $('#userInfo').html("<img src= '" + response.avatar_url +"'>" +"</a>" + "<br>" + ); 
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
  return getRepo;
};
