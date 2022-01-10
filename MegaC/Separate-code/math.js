const prompt = require('prompt-sync')();

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
        console.log('Well Done! You got the answer correct! Let\'s go again!');
        setTimeout(function(){
            hard();
        },1000);
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