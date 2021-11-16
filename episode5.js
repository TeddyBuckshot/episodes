// EPISODE 5
//  ——————————————————————————————————————————————————————————————————————————————————————————————----------------------
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

  //  The weapon used will display as the Revlover, this is because the weapon KEY is reassigned with a new VALUE,
  // this happens when the 'changeWeapon' function is called and passed the string 'Revolver'.
  // This is possible because the constant is assigned the OBJECT scenario and this cannot be changed, 
  // but the attributes within the OBJECT can be manipulated.

  