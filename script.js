var quiz = [{
  Question: "Who hosted the 2024 Oscars?",
  Answers: ["Jimmy Fallon", "Jimmy Hendrix", "Jimmy Kimmel", "Jimmy Tallon"]
},
{Question: "Who won best actor?",
Answers: ["Cillian Murphy", "Robert Downey Jr", "Emma Stone", "Jimmy Fallon"]},

{Question: "Who won best actress?",
Answers:["Emma Stone", "Colin Farrell", "Lindsay Lohan", "Michelle Keegan"]}


];

var questionTitle = document.getElementById("questionTitle");
var selectionList = document.getElementById("selectionList");
var nextButton = document.getElementById("nextButton");


var questionIndex = 0;
var length1 = allQuestions.length;
var correctAnswer = 0;

function populateQuestion() {
  var currentQuestion = allQuestions[questionIndex];
  questionTitle.textContent = currentQuestion.Question;
  for (var i = 0; i < currentQuestion.Answers.length; i++) {
    var option = document.createElement("option");
    option.textContent = currentQuestion.Answers[i];
    selectionList.appendChild(option);
  }
}





    
    


