const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Bazooka'
  };

let murderWeapons = ['Revolver', 'Rope', 'Lead Pipe', 'Candlestick', 'Spanner']
let rooms = ['Library', 'Conservatory', 'Hall', 'Foyer', 'Living Room', 'Kitchen']
const suspects = ['Miss Scarlet', 'Professor Plum', 'Colonel Mustard', 'Mrs Peacock', 'Reverend Green', 'Mrs White']

if (scenario.murderer === 'Mrs Peacock') {
    let murderer = 'Colonel Mustard';
    console.log(murderer);
}

rooms.shift();

const murderRoom = function(room) {
    if (scenario.room === room) {
        console.log(room)
    }
}

const murderWeapon = function(weapon) {
    let weapons = murderWeapons.splice(1, 3);
    weapons.pop();
    for (var i = 0; i < weapons.length; i+=2) {
        var currentSelection = weapons[i];
        console.log(currentSelection);
        }
};

suspects.shift();

if (scenario.room.length ** 2 == "144") {
    console.log(rooms[2])
};

const killer = function(name) {
    if (name === scenario.murderer) {
        murderer = 'Miss Scarlet'
    }
    console.log(murderer)
};

const changeMurderer = function() {

    murderer = suspects[3];

  const plotTwist = function() {
    murderer = suspects[0];
  }

  plotTwist();
};

murderRoom('conservatory')
murderWeapon('Lead Pipe')
changeMurderer()
console.log(murderer)