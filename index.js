const notes = require('./questions-and-answers.json');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function main() {
    const i = getRandomInt(0, notes.length);
    const {question, answer} = notes[i];
    let q = question;
    if (answer === 'true' || answer === 'false') {
        q = `True or false: ${question}`;
    }
    rl.question(q, (a) => {
        console.log(`You said: "${a}".`);
        console.log(`The correct answer is: ${answer}`);
        rl.close();
    });
}

main();
