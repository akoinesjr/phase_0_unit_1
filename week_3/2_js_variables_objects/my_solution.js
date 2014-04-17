/* I paired by myself on this challenge.

Pseudocode

secretNumber = the number 7
password = the string "just open the door"
allowedIn = false
members = an array where first element is the string "John" and fourth is string "Mary"


__________________________________________
Write your code below.
*/
secretNumber=7;
password="just open the door";
allowedIn=false
members=["John",'a','b','Mary'];

/*__________________________________________
Refactored Code: Include a refactored version (or justification of your original code) here. 

The code I used passed all of the tests.



__________________________________________
 Reflection: Use the reflection guidelines to write a reflection here. 

I saw fairly quickly that the assert functions tests whether its first argument is true. I then read
through the functions and determined that I would have to create variables meeting certain conditions
in order to pass the tests. 
 
One issue I had with this was that I was not sure exactly how to write the pseudocode in a manner that 
would be helpful for something as simple as writing variable names.

 __________________________________________
 Driver Code:  Do not alter code below this line.
*/
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

