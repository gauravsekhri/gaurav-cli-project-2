var readlineSync = require('readline-sync');

var respondentName = readlineSync.question("Please tell me your name.\n");
console.log("Welcome "+ respondentName + ". Lets Play a short GK Quiz");

var points = 0;

var highestPoints = [
  {
    name: "Gaurav",
    points: 3,
  },
  {
    name: "Abhishek",
    points: 2,
  },
  {
    name: "Ravi",
    points: 2,
  },
]

var questions = [{
  question: "\nWhat is the first name of Indian Cricket team captain? \n",
  answer: "Virat"
}, {
  question: "\nWho is the admin of Youtube's best tutorial channel? \n",
  answer: "Tanay"
},
{
  question: "\nWhere is Eiffel Tower located? \n",
  answer: "Paris"
},
{
  question: "\nWhat is the color of grass? \n",
  answer: "Green"
},
{
  question: "\nWhich colour is at the bottom edge of a rainbow? \n",
  answer: "Violet"
}
];


function play(ques, ans) {
  var newAns = readlineSync.question(ques);

  if (newAns.toUpperCase() === ans.toUpperCase()) {
    console.log("You are right");
    points = points + 1;
    
  } else {
    console.log("You are wrong!");
   
  }

  console.log("\ncurrent points ", points);
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var newQues = questions[i];
    play(newQues.question, newQues.answer)
  }
}

function showScores() {
  console.log("\nYour total Points ", points);

  console.log("\nHighest Points List : ");

  highestPoints.map(points => console.log(points.name, " : ", points.points))
}

game();
showScores();

