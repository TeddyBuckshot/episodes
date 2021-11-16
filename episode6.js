// EPISODE 6
//  ——————————————————————————————————————————————————————————————————————————————————————————————----------------------
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// a LET is declared at the top of the file with the scope of the whole file,
// BUT the function within the constant 'changeMurderer' is called.
// within this function another constant 'plotTwist' containing a function is declared,
// within this function the 'murderer' value is reassigned (which can be done with a LET), with the string 'Mrs. White'.
// plotTwist is then called within this function to set the new value.

// the constant 'declareMurderer' is then called which returns a string that will be printed in the console.log.
// this string will contain the new value of 'murderer'