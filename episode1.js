// EPISODE 1
//  ——————————————————————————————————————————————————————————————————————————————————————————————----------------------
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

  // print "The murderer is miss scarlet" because the constants 'scenario' and 'verdict' are created in the main file, 
  // meaning their scope is the whole file.
  // constant 'declareMurderer' is holding an anonymous function which can access 'scenario',
  // this is because it is declared before the function.
  