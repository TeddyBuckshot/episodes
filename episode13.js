const murderer = {
    name: "Professor Plum",
    weapon: "Knife",
    room: "Conservatory"
  };
  
  
  const changeMurderer = function(motive) {
    if (motive === "greed"){
      murderer.name = "Mr Green";
    } else if (motive === "jealousy"){
      let twist = function (){
        let weapon = "chib"
      }
      twist();
      if (murderer.weapon === "knife"){
        murderer.name = "Col. Mustard"
      }
    } else {
      murderer.name = "Mrs White"
    }
  };
  
  changeMurderer("jealousy");
  
  const declareMurderer = function() {
    return `The murderer is ${murderer.name}.`;
  }
  
  
  const verdict = declareMurderer();
  console.log(verdict);