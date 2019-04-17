//In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.

//Your "Programmer" constructor should be able to take in the following information...
function Programmer ("name", "position", "age", "language"); 
//- The programmer's name
//- Their position/job title
//- How old they are
//- Favorite programming language
this.name = name; 
this.position = position; 
this.age = age; 
this.language; 

this.allInformation = function() {
    console.log(this.name + this.job)

}
//Now create a method for the constructor that would print all of the information contained within an object to the console.

//Finally, create a "Programmer" object and call the method to print its contents