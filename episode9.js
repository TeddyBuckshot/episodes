// EPISODE 9
//  ——————————————————————————————————————————————————————————————————————————————————————————————----------------------
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// LET (murderer) is declared and assigned 'Professor Plum'.
// a conditional checks if (murderer) equates to the string 'Professor Plum'.
// It is, so a new LET (murderer) is declared and assigned 'Mrs. Peacock'.
// this new LET is not accessible outside of the conditional IF statement it is declared within.
// because it is a LET, its scope is within the block it is declared.

//So, when (declareMurderer) is called is returns a string with the value of (murderer).
// this is unchanged from the value assigned at the top of the file.