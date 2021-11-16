// EPISODE 4
//  ——————————————————————————————————————————————————————————————————————————————————————————————----------------------
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// the first console.log with display the 3 suspect names,
// BUT the third suspect will have changed from 'Mrs. Peacock' to 'Colonel Mustard'.
// the second console.log will display the 3 names within the LET variables defined at the begining of the file.

// This is because the 'LET' which is storing 'Colonel Mustard' is within the scope of 'declareAllSuspects',
// This means it cannot be accessed outside of this anonymous function.
// When 'declareAllSuspects' is not called, like with the second console.log,
// the value of 'LET suspectThree' is taken from the 'LET' declared at the start of the file.
 
// the SCOPE of 'Mrs. Peacock' - is the entire file
// the SCOPE of 'Colonel Mustard' - is the function he is within.