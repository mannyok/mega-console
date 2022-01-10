const prompt = require('prompt-sync')();

const start = prompt('Are you sure you want to open "MegaGamesC"? (yes/no) ').toLowerCase();

if (start === 'yes') {
    console.log('Loading game...');
    mainMenu();
} else if (start === 'no') {
    console.clear();
}

function eightBall() {
    console.clear();
    const prompt = require('prompt-sync')();

    const userName = prompt('Enter a username: ');
  
    userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
  
    const question = prompt('Enter a question: ');
  
    let randomNumber = Math.floor(Math.random() * 8);
    let eightBall = '';
  
    switch (randomNumber) {
      case 0:
        eightBall = 'It is certain.';
        break;
      case 1:
        eightBall = 'It is decidedly so.';
        break;
      case 2:
        eightBall = 'Reply hazy, try again.';
        break;
      case 3:
        eightBall = 'Cannot predict now';
        break;
      case 4:
        eightBall = 'Do not count on it';
        break;
      case 5: 
        eightBall = 'My sources say no';
        break;
      case 6:
        eightBall = 'Outlook not so good';
        break;
      case 7:
        eightBall = 'Signs point to yes';
        break;
    }
  
    console.log(`The eight ball answered: ${eightBall}`);
}

function rockPaperScissors() {
    console.clear();
    const prompt = require ('prompt-sync')();

    if (userName) {
        console.log(`Hello ${userName}!`);
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
}

function kewlMathGame() {
    console.clear();

    const userName = prompt('Enter a username: ');

    userName ? console.log(`Welcome to KewlMathGame ${userName}!`) : console.log('Welcome to KewlMathGame!');

    const level = prompt('Would you like Easy, Meduim or Hard mode? ').toLowerCase();

    const hard = () => {
        let product1 = Math.floor(Math.random() * 11);
        let product2 = Math.floor(Math.random() * 11);
        let answer = product1 * product2;
        const userAnswer = prompt('Please solve this equation: ' + product1 + ' x ' + product2 + ' = ');
        if (parseInt(userAnswer) === answer) {
            console.log('Well Done! You got the answer correct! Redirecting to Main Menu...');
            setTimeout(function(){
                mainMenu();
            },3000);
        } else {
            console.log('Wrong Answer! try again!');
            console.log('The answer was ' + answer + ' You said: ' + userAnswer);
            hard(); 
        }
    }

    if (level === 'easy') {
        console.log('Don\'t be a wussy lol, Redirecting to hard mode');
        hard();
    } else if (level === 'medium') {
        console.log('Did you really choose medium? I was hoping nobody would, so redirecting you to hard mode.');
        hard();
    } else if (level === 'hard') {
        console.log('I like the confidence!');
        console.log("Don't worry. This won't be difficult at all.");
        hard();
    }
}



function helpPage() {
    console.clear();
    console.log('Games to play:');
    console.log(' -help (aliases: -h)                          ' + 'Prints this help page.');
    console.log(' -eightBall (alisaes: -8ball)                 ' + 'Plays Eightball.');
    console.log(' -rockPaperScissors (alisaes: -rps)           ' + 'Plays Rock, Paper, Scissors.');
    console.log(' -kewlMathGame (alisaes: -kmg)                ' + 'Plays KewlMathGame.');
} 

function mainMenu() {
    console.clear();
    console.log('Welcome to the Main Menu!');
    const menu = prompt('Please choose a game (If you don\'t know how to use this please type "-help"): ');
    switch (menu) {
        case '-kmg':
            kewlMathGame();
            break;
        case '-help':
            helpPage();
            break;
        case '-8ball':
            eightBall();
            break;
        case '-rps':
            rockPaperScissors();
            break;
        case '-eightBall':
            eightBall();
            break;
        case '-rockPaperScissors':
            rockPaperScissors();
            break;
        case '-kewlMathGame':
            kewlMathGame();
            break;
        case '-h':
            helpPage();
            break;

    }
}