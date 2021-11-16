// EPISODE 3
//  ——————————————————————————————————————————————————————————————————————————————————————————————----------------------
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// The first console.log will display the value assigned to 'LET murderer' within 'declareMurderer' constant.
// The second console.log will display the value assigned to 'LET murderer' at the top of the file.
// This is because the 'LET' at the top of the file is within the scope of the entire file,
// whereas the 'LET' within 'declareMurderer' is limited to the scope of the function it is within.
// THIS 'LET' is not accessible without calling the 'declareMurderer' function - as seen in the first console.log.

