var readlineSync = require('readline-sync');
var chalk = require('chalk');
let score = 0;
const highScores = [{
    name: "I",
    score: 3,
}, {
    name: "Haresh",
    score: 2,
}, {
    name: "Abinash",
    score: 1,
}]
function play() {
    const qa = [
      {
        question: "1.Which player has won the most IPL trophies?",
        answer: 'Rohit Sharma'
      }, 
      {
        question: "2.Which player has hit the most fours in IPL?",
        answer: 'Shikhar Dhawan'
      }, 
      {
        question: "3.Which player bagged the 'Emerging Player of the Tournament' award in IPL 2008?",
        answer: 'Shreevats Goswami'
    },
    {
        question: "4.Who among the following players has never been auctioned in IPL history?",
        answer: 'Virat Kholi'
    },
    {
        question: "5.Who is the first player to feature in 200 IPL games?",
        answer: 'M S Dhoni'
    }
    ]
    for(let question of qa) {
        let ans = readlineSync.question(`${question.question} `) 
          check(ans, question.answer)
    }
    console.log(`Your score is ${score}`)

  
}

function check(userInput, answer) {
    if (userInput.toLowerCase() === answer.toLowerCase()) {
        score++
        console.log(chalk.bgGreenBright.black("That's correct answer"))
    } else {
       console.log (chalk.bgRedBright.black("That's wrong answer"))
    }
}

function start() {
  console.log(chalk.bgBlueBright.black('Anwser some questions about IPL'))
    var userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}

function showScores(playerScore) {
    console.log('------------------') 
    console.log(`You scored ${playerScore}`)
      for(let score of highScores) {
        if(playerScore === score.score){
          console.log(`${score.name} and You scored ${score.score}`)
        }
        else console.log(`${score.name} scored ${score.score}`)
    }
}

start()
play() 
showScores(score)