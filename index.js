var readLineSync = require("readline-sync");
var score = 0;

var highScore = [
  {
    name : "Erlich Bachman",
    score : 3,
  },
  {
    name : "Nelson Bighetti",
    score : 2,
  }
];

var questions = [
  {
    ques : "What is Nine time F?\n",
    ans : "FleventyFive",
  },
  {
    ques : "What was Erlich Bachman's Startup called?\n",
    ans : "Aviato",
  },
  {
    ques : "What was Jared Dunn in Hooli?\n",
    ans : "Donald",
  }
];

const welcome = () => {
  const userName = readLineSync.question("What is your Name?\n");
  console.log(`Hey ${userName} How well do you know the Tv show, Silicon Valley?\n`);
}

const piedPiper = (ques, ans) => {
  const userAns = readLineSync.question(ques);

  if(userAns.toUpperCase() === ans.toUpperCase()) {
    console.log("Correct Answer!\n");
    score += 1;
  } else {
    console.log("Wrong Answer :(\n");
  }

  console.log(`Current Score : ${score}\n`);
  console.log("--------\n");
}

const letCompressionStart = (questions) => {

  for(let index = 0; index < questions.length; index++) {
    let ques = questions[index].ques;
    let ans = questions[index].ans;

    piedPiper(ques, ans);
  }
}

const alwaysBlue = () => {
  console.log(`YAY! You SCORED: ${score} \n`);

  console.log("Check out the high scores, if you should be there ping me and I'll update it\n");

  highScore.map(programmer => console.log(`${programmer.name} : ${programmer.score}\n`));
}

welcome();
letCompressionStart(questions);
alwaysBlue();