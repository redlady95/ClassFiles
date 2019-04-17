//------------------
//---- PART 1 -----
//------------------
//# **Instructions**

// Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

// Start out by creating a constructor function called "Player" with the following properties and methods...
function Player(name, position, offense, defense) {
    this.name = name; 
    this.position = position; 
    this.offense = offense; 
    this.defense = defense;  
}
    this.goodGame = function() {
        if(Math.floor(Math.random() * 2) === 0) {
        this.offense++;
        console.log(this.name + "'s offense has gone up!\n----------");
      }   
        else {
        this.defense++
        console.log(this.name + "'s defense has gone up!\n----------");
    }
}; 

this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
        this.offense--; 
        console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
}; 
this.PrintStats = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
  };
}

var starters = []; 
var subs = []; 
var team = []; 


var createPlayer = function () {
    if(starters.length + subs.length < 5) {
        console.log("\nNEW PLAYER!\n")
    }
}
    inquirer.prompt ([
        {
            name:"name", 
            message: "What is the players name?"
        }, {
            
            name: "position", 
            message: "What is your players position?"
            
        }, {
            name: "offense", 
            message: "Player's Offenseive Ability: ", 
            validate: fuction(value) {
                if (isNAN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                    return true;
                }
                return false;
            }
        }, {
            name: "defense", 
            message: "Player's Defensive Ability: ",
            validate: function(value) {
              if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
                return true;
              }
              return false;
            }
    ]).then(fuction(answers) {

        var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
       
        if (starters.length < 3) {
          starters.push(player);
          team.push(player);
          console.log(player.name + " added to the starters");
        }
        else {
          subs.push(player);
          team.push(player);
          console.log(player.name + " added to the subs");
        }
        // runs the createPlayer function once more
        createPlayer();
      });
    }
    else {
      // loops through the team array and calls printStats() for each object it contains
      for (var i = 0; i < team.length; i++) {
        team[i].printStats();
      }
    }
  };
  
  // calls the function createPlayer() to start the code
  createPlayer();

  var teamscore = 0; 
  var count = 0; 

  function gameplay (); 

    
