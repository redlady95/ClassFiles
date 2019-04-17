// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer"); 

inquirer
    .prompt([
    {
        type: "input", 
        message: "Please put your name?", 
        name: "username"
    }, 

     {
         type: "password", 
         message: "What is your password?", 
        name: "password"
     },

     {
         type: "list",
         message: "What kind of pet do you have?", 
         choices: ["Dog", "Cat", "Fish"], 
     }, 

    {
         type: "checkbox", 
         message: "I feed my pet?",  
         choices: ["Dry Food", "Soft Food", "Pellets"]
    },

    {
       type: ""
    }

    ]).then(function(userAnswers){
        if (!confirm) {
        console.log(userAnswers); 
        }
    }); 