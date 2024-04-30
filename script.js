const questions = [
  {
    question: "Who hosted the 2024 oscars?",
    choices: ["Jimmy Kimmel", "Jimmy Fallon", "Jim Talent"],
    correct: 0
  },
  {
    question: "Who won best actor?",
    choices: ["Killem All Merfield", "Tony Stark", "Cillian Murphy"],
    correct: 2
  },
  {
    question: "who won best actress?",
    choices: ["Emma Stoned", "Emma Stone", "Emma Baked"],
    correct: 1
  },
]
let currentQuestion = 0;
function showQuestion(){
  const questionText = document.getElementById("question")
questionText.innerText=questions[currentQuestion].question;

const choices = document.getElementById("choices");
choices.forEach((choice, index)=> {
  choice.innerText = questions[currentQuestion].currentQuestion[index];
})}


showQuestion();













    
    


