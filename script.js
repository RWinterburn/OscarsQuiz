const submit = document.getElementById("submit"); 
const result = document.getElementById("show-result"); 
const inputs = document.getElementsByTagName("input"); 
const resultText = {
  // text to display on result
  correct: "Correct! Nice one!",
  wrong: "Wrong! Better Luck Next Time Scrub!",
};

const goNextMessage = " Click here for the next question.";


const questions = [
  {
    question: "Who hosted the 2024 oscars?",
    choices: ["Jimmy Kimmel",
     "Jimmy Fallon",
      "Jim Talent",
       "Tom Brady"],
    correct: 0,
  },
  {
    question: "Who won best actor?",
    choices: [
      "Killem All Merfield",
      "Tony Stark",
      "Cillian Murphy",
      "Stewie Griffin",
    ],
    correct: 2,
  },
  {
    question: "who won best actress?",
    choices: [
      "Emma Stoned",
     "Emma Stone",
      "Emma Baked", 
      "Emma Chonged"],
    correct: 1,
  },
];

let currentQuestion = 0;
let score = 0;
function showQuestion(){
  const questionText = document.getElementById("question")
 const answers = document.querySelectorAll("label")
console.log(questionText)

questionText.innerText = questions[currentQuestion].question;
console.log(questionText.innerText)

for(let i = 0; i < answers.length; ++i){
  answers[i].innerText = questions[currentQuestion].choices[i];
}
}

//next question

//evaluate answer

function evaluateAnswer(){
  let answer;
  for(let = 0; i < inputs.length; ++i){
    //goes through radio and looks for clicked options
    if(inputs[i].checked){
      if(inputs[i].value == questions[currentQuestion].correct){
        score++;
        result.innerText = resultText.correct + goNextMessage;
      }else{
        result.innerText = resultText.wrong + goNextMessage;
      }
    }
  }
}


showQuestion()
submit.addEventListener('click',(e)=>{
  event.preventDefault();
  evaluateAnswer();
})












    
    


