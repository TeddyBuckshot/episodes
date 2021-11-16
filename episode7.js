// EPISODE 7
//  ——————————————————————————————————————————————————————————————————————————————————————————————----------------------
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// the result with be mr. green.
// this is becuase the (let murderer) within the constant (plotTwist) only has scope within (plotTwist).
// so, even though (unexpectedOutcome) reassigns this (let murderer), it is not accessible outside of (plotTwist).
// so, when (changeMurderer) is called Mr. Green is returned because that is set within the scope of (changeMurderer)