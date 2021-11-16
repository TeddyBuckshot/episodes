// EPISODE 8
//  ——————————————————————————————————————————————————————————————————————————————————————————————----------------------
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

  // a constant OBJECT is declared at the top.
  // (changeScenario) is called.
  // VALUES of KEYS: (room) and (murderer) are reassigned.
  // (plotTwist) is called and passed a string,
  // conditional checks that string passed equates to the current VALUE of KEY (room).
  // It is, so KEY (murderer) is reassigned.
  // (unexpectedOutcome) is called and passed a string,
  // conditional checks that string passed equates to current VALUE of KEY (murderer).
  // It is, so KEY (weapon) is reassigned.
  // At this point the constant (scenario) contains {murderer: 'Colonel Mustard', room: 'Dining Room', weapon: 'Candle Stick'}
  // declare weapon is called. returns VALUE of KEY (weapon)
  // return is stored in (verdict).
  // console.log prints "the weapon is Candle Stick"