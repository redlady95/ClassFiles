// * Open the `tv.js` file. This file contains a constructor function that will be used to create a TV object capable of searching the TV Maze API for shows and actors.

// * Install the `axios` package by running `npm install axios` in your terminal. We will use the `axios` module to make HTTP requests to the TV Maze API. Require the `axios` package and the built-in `fs` package at the top of the `tv.js` file.

// * Inside of the `TV` constructor function's `findShow` method, use the `axios` package to hit the TV Maze API for the `URL` string.

// * Once you have the response body of the HTTP request, 
// store the response.data into a variable.

// * After getting the JSON response from the HTTP request, 
// create a string containing the following information from the returned show data:

//  * The name of the show
//  * The show's genre(s)
//  * The show's average rating
//  * The show's network name
//  * The show's summary

// * Save this string to the `log.txt` file using the `fs.appendFile` method.
//  If the file does not already exist, `fs.appendFile` will create it.

// * After saving the data to the `log.txt` file, print this information to the console.

// * Verify your code works by running the cli file and passing in the 
// name of a TV show, e.g. `node cli show Scrubs`. 
// This should print the specified information to the console and save
//  it to the `log.txt` file.

// ### Hints

// * Check out some sample output from the TV Maze single show search API:
//  <http://api.tvmaze.com/singlesearch/shows?q=scrubs>.

// * You would have used the `axios` package for the Liri HW assignment.
//  Refer back to this if you need a refresher on how to use the package.

var TV = require("./tv");

// Create a new TV object
var tv = new TV();

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

var tv = new TV();

if (!search) {
  search = "show";
}

if (!term) {
  term = "Andy Griffith";
}

if (search === "show") {
  console.log("Searching for TV Show");
  tv.findShow(term);
} else {
  console.log("Searching for TV Actor");
  tv.findActor(term);
}
