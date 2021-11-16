const scenario = {
    murderer: "Professor Plum",
    room: "Dining Room",
    weapon: "Candle Stick"
}

const changeScenario = function () {
    if (scenario.weapon === "Candle Stick") {
        scenario.room = "Conservatory";
    }

    const plotTwist = function (murderer) {
        if (scenario.room === "Conservatory") {
            scenario.murderer = murderer;
        }

        const unexpectedOutcome = function () {
            if (scenario.murderer === "Mr Green") {
                scenario.murderer = "Colonel Mustard"
            }

            const butWait = function () {
                if (scenario.weapon === "Candle Stick") {
                    scenario.murderer = "Mrs Peacock";
                }

                const mixUp = function () {
                    scenario.murderer = "Mr Green"
                    scenario.weapon = "Lead Pipe"
                }

                    const andFinally = function () {
                        if (scenario.murderer === "Mr Green") {
                            scenario.room = "Kitchen"
                        }
                    }
                    andFinally()
                    }
                    butWait()
                    }
                     unexpectedOutcome()
                        }
                    plotTwist("Mr Green")
}
const declareMurderer = function () {
    return `The murderer is ${scenario.murderer}.`;
  }
changeScenario()
const verdict = declareMurderer()
console.log(verdict)