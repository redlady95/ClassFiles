var fs = require("fs");

var action = process.argv[2]; 
var value = process.argv[3]; 

switch (action) {
    case "total": 
    total(); 
    break; 

    case"deposit":
    deposit(); 
    break; 

    case"withdraw": 
    withdraw(); 
    break; 

    case "lotto": 
    lotto(); 
    break; 
}
 
function total() {
fs.readFile("bank.txt", "utf8", function(err, data) {
    if(err){
        console.log(err); 
    }

data = data.split(", "); 
var result = 0;     

});

fs.appendFile("bank.text", deposit, function(err) {

}

fs.readFile("bank.txt", withdrawl, function(err) {


}

fs.readFile("bank.txt", lotto, function(err) {

} 