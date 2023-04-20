export {rps, rpsls}

let results = {
    rock: {
        rock: 'tie',
        paper: 'win',
        scissors: 'lose',
        lizard: 'lose',
        spock: 'win'
    },
    paper: {
        rock: 'lose',
        paper: 'tie',
        scissors: 'win',
        lizard: 'win',
        spock: 'lose'
    },
    scissors: {
        rock: 'win',
        paper: 'lose',
        scissors: 'tie',
        lizard: 'lose',
        spock: 'win'
    },
    lizard: {
        rock: 'win',
        paper: 'lose',
        scissors: 'win',
        lizard: 'tie',
        spock: 'lose'
    },
    spock: {
        rock: 'lose',
        paper: 'win',
        scissors: 'lose',
        lizard: 'win',
        spock: 'tie'
    }
}

function rps(action) {
    let options = ["rock", "paper", "scissors"];
    let rand = Math.trunc(Math.random() * 3);
    let comp = options[rand];

    if (action == null) { return { player : comp }; }

    action = action.toLowerCase();

    if (!(options.includes(action))) {
        console.error(`${action} is out of range.`);
        throw new RangeError();
    }

    return { player: action,
             opponent: comp,
             result: results[comp][action] };
}

function rpsls(action) {
    let options = ["rock", "paper", "scissors", "lizard", "spock"];
    let rand = Math.trunc(Math.random() * 5);
    let comp = options[rand];

    if (action == null) { return { player : comp }; }

    action = action.toLowerCase();

    if (!(options.includes(action))) {
        throw new RangeError();
    } else {
        return {
            player: action,
            opponent: comp,
            result: results[comp][action]
        };
    }
}
