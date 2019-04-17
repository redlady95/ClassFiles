function DigitalPal(hungry, sleepy,bored, age) {
    this.hungry = false; 
    this.sleepy = false; 
    this.bored = true;
    this.age = age=0; 
     
    this.printsStats = function() {
        console.log("hungry" + this.hungry);
        console.log("sleepy" + this.sleepy); 
        console.log("bored" + this.bored);
        console.log("age" + this.age); 
    }
}

this.feed = function() {
    if (this.hungry === true); 
    console.log(this.hungry + "Feed Me!"); 

    else (this.hungry === false); 
    console.log(this.hungry + "No thanks, I'm Full"); 
}

this.sleep = function() {
    if (this.sleepy === true); 
    console.log(this.hungry + "ZZZZZZZZZZZ!"); 

    else (this.sleepy === false); 
    console.log(this.hungry + "No way, I'm not tired!"); 
}
this.play = function() {
    if (this.bored === true); 
    console.log(this.bored + "Yay! Lets Play"); 

    else (this.bored === false); 
    console.log(this.hungry + "Not right now. Later?"); 
}

this.increaseAge = function(sleep) {
    if (this.sleepy + age + 1 )
    console.log(this.hungry + "Happy Birthday to me! I am "+age+" old!"); 

}

var dog = new DigitalPal(outside, bark ) { 
    this.outside: false; 
    this.bark; 
    this.goOutside; 
    this.goInside; 

}

var bark = new Animal(true, "Wolf, Wolf!"); 
var Meow = new Animal(true, "Meow!"); 