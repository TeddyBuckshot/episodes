let murderer = "Proffessor Plum";

let changeMurderer = function () {
    murderer = "Mrs. Peacock";

    const plotTwist = function () {
        let murderer = "Mr. Green";
        murderer  = unexpectedOutcome(murderer);

        function unexpectedOutcome (murderer) {
            if (murderer === "Mrs. Peacock") {
                murderer = "Proffessor Plum";
                return murderer;
            } else {
                murderer = "Mrs.Peacock";
                return murderer;
            }
        }

    };

    murderer = plotTwist();

};

const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);