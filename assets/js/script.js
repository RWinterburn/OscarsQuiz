const titlescreen = document.getElementById("titlescreen");
const endscreen = document.getElementById("endscreen");
const submit = document.getElementById("submit");
const result = document.getElementById("show-result");
const inputs = document.getElementsByTagName("input");
const start = document.getElementById("start-button");
const nameInput = document.getElementById("fname");

const resultText = {
  // text to display on result
  correct: "Correct! Nice one!",
  wrong: "Wrong! Better Luck Next Time!"
};

const goNextMessage = " Here's the next question.";
let questionAnswered = false;

//QUESTIONS ARRAY
const questions = [
  {
    choices: [
      "Jimmy Kimmel",
      "Jimmy Fallon",
      "Jim Talent",
      "Tom Brady"],
    correct: 0,
    question: "Who hosted the 2024 oscars?"


  },
  {
    choices: [
      "Killem All Merfield",
      "Tony Stark",
      "Cillian Murphy",
      "Stewie Griffin"],
    correct: 2,
    question: "Who won best actor?"
  },
  {
    choices: [
      "Emma Stoned",
      "Emma Stone",
      "Emma Baked",
      "Emma Chonged"],

    correct: 1,
    question: "who won best actress?"
  },
  {
    choices: [
      "Christopher Nolan",
      "Sir Top'n hat",
      "Chris Noland",
      "Michael Bay"],

    correct: 0,
    question: "who won best Director?"
  },
  {
    choices: [
      "Poor Things",
      "Oppenheimer",
      "Barbie",
      "Godzilla Minus One"],

    correct: 1,
    question: "Who won best picture?"


  }, {
    choices: [
      "Cat In the Hat",
      "Anthony I've fallen",
      "Anatomy I've fallen",
      "Anatomy of a fall"],
    correct: 3,
    question: "Who won best original screenplay?"


  },
  {
    choices: [
      "Zone of Interest",
      "The Boy and Erin",
      "The Boy and The Heron",
      "Michael Bay, Bay Watch"
    ],
    correct: 2,
    question: "Who won best animated feature?"


  },
  {
    choices: [
      "Jennifer Lawrence",
      "Da'Wine Bring Joy Rudolph",
      "Da'Vine Joy Randolph",
      "Emma's stoned"],
    correct: 2,
    question: "who won best supporting actress?"


  },
  {
    choices: [
      "Godzilla Minus One",
      "Antman 3",
      "Fast and Furious Family Matters",
      "Jason Quorn Quorn Ultimatum"],
    correct: 0,
    question: "who won best visual effects?"


  },
  {
    choices: [
      "Bill Hader",
      "Billie Ellish",
      "Phineas & Ferb",
      "Ariana Grande Latte"],
    correct: 1,
    question: "who won best orignal song?"


  },
  {
    choices: [
      "Oppenheimer",
      "Barbie",
      "Poor Things",
      "Saltburn"],
    correct: 0,
    question: "what film won the most Oscars?"


  }

];

//SCORE TRACKING
let currentQuestion = 0;
let score = 0;

//show score
function showScore() {
  const scoreElement = document.getElementById("score");
  scoreElement.innerHTML = `Current Score: <strong>${score}</strong>`;
}

//SHOW QUESTION PULLING FROM LABEL
function showQuestion() {
  const questionText = document.getElementById("question");
  const answers = document.querySelectorAll("label");
  console.log(questionText);

  questionText.innerText = questions[currentQuestion].question;
  console.log(questionText.innerText);
  questionText.innerText = questions[currentQuestion].question;
  console.log(questionText.innerText);

  for (let i = 0; i < answers.length; ++i) {
    answers[i].innerText = questions[currentQuestion].choices[i];
  }
}
//show users name
function showName() {
  const name = document.getElementById("fname");
  const fname = name.value;
  name.value = `Name: ${fname}`;
  document.getElementById("name").innerHTML = `Name: <strong>${fname}</strong>`;
}

//evaluate Answer
function evaluateAnswer() {
  for (let i = 0; i < inputs.length; ++i) {
    //goes through radio and looks for clicked options
    if (inputs[i].checked) {
      if (inputs[i].value == questions[currentQuestion].correct) {
        score++;
        result.innerText = resultText.correct + goNextMessage;
        setTimeout(() => {
          result.innerText = "";
        }, 3000);
      } else {
        result.innerText = resultText.wrong + goNextMessage;
        setTimeout(() => {
          result.innerText = "";
        }, 3000);
      }
    }
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  evaluateAnswer();
  nextQuestion();
  showScore();
});

result.addEventListener("click", () => {
});


function nextQuestion() {
  currentQuestion++;
  questionAnswered = false;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
    return;
  }
}

/*
*Blackbox ai assisted
*/
start.addEventListener("click", () => {
  if (nameInput.value !== "") {
    titlescreen.style.display = "none";
    showQuestion();
    showName();
  } else {
    alert("Please enter your name!");
  }
});
/*
*End of blackbox ai assisted
*/

function endQuiz() {
  const fname = document.getElementById("fname").value;
  endscreen.style.display = "block";
  const scoreEndElement = document.getElementById("score-end");
  scoreEndElement.innerHTML = `${fname} You scored: ${score} out of like 10?`;
}

let tryAgain = document.getElementById("tryAgain");

tryAgain.addEventListener("click", () => {
  // Reset the quiz
  score = 0;
  currentQuestion = 0;
  endscreen.style.display = "none";
  showQuestion();
});

