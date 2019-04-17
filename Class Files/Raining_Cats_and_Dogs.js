//# **Instructions**

//* Make a dogs object with three keys...

var dogs = {

//  * First key called "raining" with a value of true
    raining: true, 
//* Second key called "noise" with a value of "Woof!"
    noise: "woff!", 
//* Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining dogs
    makeNoise function(){
        if(dogs.raining === true){
            console.log(this.noise)
        }
    },
}; 
//* Make a cats object with three keys...
var cats = {
 // * First key called "raining" with a value of false
    raining: false, 
 // * Second key called "noise" with a value of "Meow!"
    noise: "meow!", 
 // * Third key called "makeNoise" which contains a function which console.logs the noise to the screen if it is raining cats
    makeNoise fuction(){
        if(cats.raining === true){
            console.log(this.noise)
        }
//* Make the dog bark
    if()
//* Make the cat meow

//* BONUS: Create a function called "massHysteria" which takes in both the cats and the dogs object and prints "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!" if both of the `raining` keys are equal to true.

//* BONUS: Look to see if you can find any means to simplify your code further and further
