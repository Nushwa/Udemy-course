
//---CODING CHALLENGE

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    printGoals: function (...NoOfPlayers) {
        console.log(`${NoOfPlayers.length} were scored.`);
    }
};
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// //1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //2.
// gameEvents.delete(64);
// console.log(gameEvents);
// //3.
// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// //4.
// for (const [key, value] of gameEvents) {
//     if (key < 45)
//         console.log(`[FIRST HALF] ${key}: ${value}`);
//     else
//         console.log(`[SECOND HALF] ${key}: ${value}`);
// }

// //1.
// for (const [x, pl] of game.scored.entries()) {
//     console.log(`Goal ${x + 1}: ${pl}`);
// }

// //2.
// const odds = Object.values(game.odds);
// let avg = 0;
// for (const x of odds) {
//     avg += x;
// }
// avg /= odds.length;
// console.log(avg);

// //3.
// const od = Object.values(game.odds);
// for (const [team, odd] of Object.entries(game.odds)) {
//     const teamName = team === 'x' ? 'draw' : `victory ${game[team]}`;
//     console.log(`Odd of ${teamName} ${odd}`);
// }


// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// //2.
// const [gk, ...fieldPlayers] = [...players1];
// console.log(gk, fieldPlayers);
// //3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// //5.
// const { odds: { team1, x: draw, team2 } } = game;
// console.log(team1, draw, team2);
// //6.
// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// //7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win'); 

const user = document.body.append(document.createElement('textarea'));
const btn = document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    const row = text.split('\n');

    for (const [i, x] of row.entries()) {
        const [f, s] = x.toLowerCase().trim().split('_');
        const out = `${f}${s.replace(s[0], s[0].toUpperCase())}`;
        console.log(`${out.padEnd(20)}${'>'.repeat(i + 1)}`);

    }
    //textTrim.join('');

})