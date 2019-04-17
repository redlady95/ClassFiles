var axios = require("axios");
var fs = require('fs');


var TV = function () {
  this.findShow = function (show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(function (response) {
      var info = response.data;
      // console.log(info);
      // * The name of the show
      // console.log(info.name);
      // * The show's genre(s)
      // console.log(info.genres);
      // * The show's average rating
      // console.log(info.rating);
      // * The show's network name
      // console.log(info.network.name)
      // * The show's summary
      // console.log(info.summary)

      var correctAnswer = "Name: " + info.name + "; Genre(s): " + info.genres +
        "; Average rating: " + info.rating + "; Network: " + info.network.name +
        "; Summary: " + info.summary + ".";

      fs.appendFile('log.txt', correctAnswer, function (err) {
        if (err) throw err;
      });

      console.log(correctAnswer);

    });
  };
  this.findActor = function(term) {
    var URL = "http://api.tvmaze.com/search/people?q=" + term;

    axios.get(URL).then(function (response) {
      var info = response.data[0].person;
      // console.log(info.country);

      var correctAnswer = "Name: " + info.name + "; Birthday: " + info.birthday +
      "; Gender: " + info.gender + "; Country: " + info.country.name +
      "; Link: " + info.url + ".";

      fs.appendFile('log.txt', correctAnswer, function (err) {
        if (err) throw err;
      });

      console.log(correctAnswer);
    });
  }
};

module.exports = TV;
