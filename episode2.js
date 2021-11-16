// EPISODE 2
//  ——————————————————————————————————————————————————————————————————————————————————————————————----------------------
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);
  
// This code will display an error in the terminal 
// The anonymous function stored in changeMurderer attempts to change the value of a constant (murderer).
// a constant cannot be reassigned.