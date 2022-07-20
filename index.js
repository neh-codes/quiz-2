//welcomeMessage
readlineSync = require('readline-sync');
console.log("Welcome to the Office quiz race!!");
var username = readlineSync.question("Enter name to begin: ");
console.log("\nHello " + username + " let's begin");
console.log("\nLets go! Are You ultimate office fan? ");
console.log("--------------------------------");

// questions
var questions = [
  {
    question:
      "1.What's Pam's favorite flavor of yogurt?\na. Vanilla\nb. Strawberry\nc. Mixed Berry\nYour Answer: ",

    answer: "c"
  },
  {
    question:
      "2.What's Phyllis's maiden name? \na. Vance\nb. Lapin\nc. Lanpin\nYour Answer: ",

    answer: "b"
  },
  {
    question:
      "3.Jim, you're 6'11\" and you weigh 90 pounds. _______ has a better body than you. Boom. Roasted.\na. Mr Peanut\nb. Gumby\nc. Santa Clause\nYour Answer: ",

    answer: "b"
  },
  {
    question:
      "4.What does Kevin suggest Dwight put in his gun holster?\na. Cellphone\nb. Banana\nc. Toy Gun\nYour Answer: ",

    answer: "b"
  },
  {
    question:
      "5.What did Kevin buy for himself when he got himself for Secret Santa?\na. A foot massager\nb. A foot bath\nc. M&M's\nYour Answer: ",

    answer: "b"
  },
  {
    question:
      "6.What's the name of Dwight's porcupine who he used to make it look like Jim was pranking him?\na. Hilly\nb. Henry\nc. Henrietta\nYour Answer: ",

    answer: "c"
  },
  {
    question:
      "7.During the episode, Prince Family Paper, what's the secret signal that Dwight and Michael agree on using?\na. Raising your eyebrows\nb. Licking your lips\nc. Coughing loudly\nYour Answer: ",

    answer: "b"
  },
  {
    question:
      "8.On what social media site does Creed say that Michael's nephew is trashing them relentlessly?\na. Twitter\nb. Facebook\nc. Instagram\nYour Answer: ",

    answer: "a"
  },
  {
    question:
      "9.Which Toy Story character is Holly's doll that Michael throws in the trash and pours coffee on?\na. Bo Peep\nb. Buzz\nc. Woody\nYour Answer: ",

    answer: "c"
  },
  {
    question:
      "10.Aside from Jim, who in the office has an obvious crush on Pam throughout the show?\na. Toby\nb. Andy\nc. Ryan\nYour Answer: ",

    answer: "a"
  }
]

//answerCheck
var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("You're correct!");
    score++;
  }
  else {
    console.log("Oops that's incorrect!");
  }
  console.log("score: ", score);
  console.log("--------------------------------");
}

//toTraverse
for (i = 0; i < 3; i++) {
  var current = questions[i];
  play(current.question, current.answer);
}
console.log("\nCongrats " + username + "! You've cleared level 1\n");
console.log("--------------------------------");

for (i = 3; i < 7; i++) {
  var current = questions[i];
  play(current.question, current.answer);
}
console.log("\nWOWIE " + username + ",entering level 2\n");
console.log("--------------------------------");

for (i = 7; i < questions.length; i++) {
  var current = questions[i];
  play(current.question, current.answer);
}


//showScore
if (score == 10) {
  console.log("That's a sign of Ultimate the Office Fan!\nyour final score is: ", score)
}
else {
  console.log(username + " your final score is: ", score);
}

//highScores data
var highScores = [
  {
    name: "Jim Halpert",
    score: 10
  },
  {
    name: "Pam Beesly",
    score: 9
  },
  {
    name: "Dwight Schrute",
    score: 8
  }
]

//finalMessage
console.log("\nHere are others on grid:")
for (i = 0; i < highScores.length; i++) {
  console.log(highScores[i]);
}
console.log("\nPing me your scores! Adios Amigos!");