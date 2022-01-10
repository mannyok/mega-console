const prompt = require ('prompt-sync')();

const username = prompt('Enter a Username (optional): ');

if (username) {
    console.log(`Hello ${username}!`);
} else {
    console.log('Hello!');
}

let jsTurn = Math.floor(Math.random() * 2);

const turn = prompt('What do you pick? ').toLowerCase();

switch (jsTurn) {
    case 0:
        console.log(`You picked ${turn}`);
        console.log('Computer picked Paper');
        if (turn === 'scissors') {
            console.log('You win, Computer loses!');
        } else if (turn === 'rock') {
            console.log('You lose, Computer Wins!');
        } else {
            console.log('Invalid input/You drew with Computer');
        }
        break;
    case 1:
        console.log(`You picked ${turn}`);
        console.log('Computer picked Scissors');
        if (turn === 'paper') {
            console.log('You lose, Computer Wins!');
        } else if (turn === 'rock') {
            console.log('You win, Computer loses!');
        } else {
            console.log('Invalid input/You drew with Computer');
        }
        break;
    case 2:
        console.log(`You picked ${turn}`);
        console.log('Computer picked Rock');
        if (turn === 'paper') {
            console.log('You win, Computer loses!');
        } else if (turn === 'scissors') {
            console.log('You lose, Computer Wins!');
        } else {
            console.log('Invalid input/You drew with Computer');
        }
        break;
}