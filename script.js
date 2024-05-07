const submit = document.getElementById("submit");
const result = document.getElementById("show-result");
const inputs = document.getElementsByTagName("input");
const resultText = {
  // text to display on result
  correct: "Correct! Nice one!",
  wrong: "Wrong! Better Luck Next Time Scrub!",
};

const goNextMessage = " Go to the question.";
let questionAnswered = false;
//QUESTIONS ARRAY
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
  {
    question: "who won best Director?",
    choices: [
      "Christopher Nolan",
      "Sir Top'n hat",
      "Chris Noland",
      "Michael Bay"],
    correct: 0,
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

//SCORE TRACKING
let currentQuestion = 0;
let score = 0;
//SHOW QUESTION PULLING FROM LABEL
function showQuestion() {
  const questionText = document.getElementById("question")
  const answers = document.querySelectorAll("label")
  console.log(questionText)

  questionText.innerText = questions[currentQuestion].question;
  console.log(questionText.innerText)
  questionText.innerText = questions[currentQuestion].question;
  console.log(questionText.innerText)

  for (let i = 0; i < answers.length; ++i) {
    answers[i].innerText = questions[currentQuestion].choices[i];
  }
}



//evaluate answer
function showScore() {
  const scoreText = document.getElementById("score");
  scoreText.innerText = `Score: ${score}`;
}

function evaluateAnswer() {
  let answer;
  for (let i = 0; i < inputs.length; ++i) {
    //goes through radio and looks for clicked options
    if (inputs[i].checked) {
      if (inputs[i].value == questions[currentQuestion].correct) {
        score++;
        result.innerText = resultText.correct + goNextMessage;
        setTimeout(() => {
          result.innerText = "";
        }, 1000);
      } else {
        result.innerText = resultText.wrong + goNextMessage;
        setTimeout(() => {
          result.innerText = "";
        }, 1000);
        showScore();

      }


    }
  }
  // questionAnswered = true;

}


showQuestion()
submit.addEventListener('click', (e) => {
  event.preventDefault();
  evaluateAnswer();

})

result.addEventListener('click', () => {

})

console.log(inputs);


//next question

function nextQuestion() {
  currentQuestion++;
  questionAnswered = false


  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    // code to run when all questions have been answered
  }
}

//event listener for submit button
submit.addEventListener("click", function () {
  evaluateAnswer();
  nextQuestion();

  // Call the evaluateAnswer function when the submit button is clicked
});














