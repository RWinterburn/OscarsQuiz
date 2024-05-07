Things to do 

Add score counter
Add Game over screen
add images on load for correct answer?

<<<<<<< HEAD
},
{ question: "who won Best Actress?",
answers : [
  {text: "Jimmy Hendrix", correct : false},
  {text: "Jimmy Tallon", correct : false},
  {text: "Emma Stone", correct : true},
  {text: "Jimmy Kimmel", correct : true},
 ]

}
];

var questionElement = document.getElementById("question");
var answerButton = document.getElementById("answer-btns");
var nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0; 


//When Quiz starts it will set all to zero
function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

functio


to do list 
add a name bar 
set the result text to go off after 3 seconds 
submit whole answer 
fix the counter 
change up the css and structure
=======
>>>>>>> 0ba620694dda2caad66bb883b72687df06ba58d6
