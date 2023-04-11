export {rps, rpsls}

let possibleResults = {
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
    let possibleActions = ["rock", "paper", "scissors"];
    let rand = Math.trunc(Math.random() * 3);
    let opponent = options[rand];

    if (action == null) { return { player : opponent }; }
    action = action.toLowerCase();

    if (!(possibleActions.includes(action))) {
        console.error(`${action} is out of range.`);
        throw new RangeError();
    }

    return { player: action,
             opponent: opponent,
             result: possibleResults[opponent][action] };
}

function rpsls(action) {
    let possibleActions = ["rock", "paper", "scissors", "lizard", "spock"];
    let rand = Math.trunc(Math.random() * 5);
    let opponent = options[rand];

    if (action == null) { return { player : opponent }; }

    action = action.toLowerCase();

    if (!(possibleActions.includes(action))) {
        throw new RangeError();
    } else {
        return {
            player: shot,
            opponent: opponent,
            result: possibleResults[opponent][action]
        };
    }
}
