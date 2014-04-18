// I worked on this challenge with Amol Borcar.
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 // Mission 1

// This is your code controlling Tharin!

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();

//Get Tharin behind Munchkin
// Move up
this.moveUp();
// Move right
this.moveRight();
this.moveRight();
// Move down
this.moveDown();
this.moveDown();

//Attack nearby enemy
this.attackNearbyEnemy();

// Edit it anywhere you like, add comments like these

// Follow the same "this.action();" format
// Code is case-sensitive.

// Mission 2

// Tharin might consider taking a detour after line 3.

this.moveUp();

// Make Tharin take a detour
this.moveRight();
this.moveLeft();

this.moveUp();

this.attackNearbyEnemy();

// Mission 3

// Kill Munchkin #1

this.moveRight();
this.attackNearbyEnemy();

// Grab Potion

this.moveRight();
this.moveDown();

// Kill Munchkin #2

this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Mission 4

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");

// Escape

this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();

// Taunt the Guards

this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// Mission 5

// Taunt the Ogre and run for cover!

this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

//Mission 6

this.say("a");
this.say("b");
this.say("c");
this.say("d");

//Mission 7

this.moveXY(57,31);
this.say("dhsjka");
this.moveXY(70,10);

//Mission 8


this.say('follow');
this.moveXY(68,47);
this.say('attack');

//Mission 9
this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres


this.moveXY(52,43);
this.attackXY(68,56);
this.attackXY(61,50);
this.attackXY(47,65);
this.attackXY(50,53);




/*
What is this referring to? Think programming-wise rather than in the terms of the game.

This refers to the method of the object that it is called on.

What does the () do in JavaScript?

It acts as a container for parameters and instructs the method to execute.

What is the point of the semicolons?

To signify the end of a statement.

   
 
// Reflection:
// Write your reflection here.

//I did not find this exercise particularly helpful. I experienced a lot of lag, bugs, and repeated crashes
//while playing this game which made completing the missions a somewhat frustrating experience.
