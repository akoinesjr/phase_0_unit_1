// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Andrew Koines
//  2. Gregory White


// 1. "YOU SIGNED... WHO?!"

// 2. "Here they Come!"

var adamSandler = {firstName: "Adam", lastName: "Sandler", age: 47, quote: "That's your home! Are you too good for your home?!"};
var kristinBell = {firstName: "Kristin", lastName: "Bell", age: 33, quote: "Do you wanna build a snowman?"};
var jimCarrey = {firstName: "Jim", lastName: "Carrey", age: 52, quote: "...So you're telling me there's a chance? YEAH!"};



// 3. "TIME IS MONEY!"

//YOUR CODE HERE!



var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";

var Client = function(name, age, quote){
  this.name=name;
  this.age=age;
  this.quote=quote;
}


// 4. "SHOW 'EM OFF!"

var arr = [adamSandler, kristinBell, jimCarrey];

var display = function (actor){
    alert(actor.firstName + " " + actor.lastName + " is " + actor.age + " years old and says " + actor.quote + '\n');
}

arr.forEach(display);
// ** BONUS **


//  Your Reflection:

