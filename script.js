var question1 = { 
  question: "Who hosted the 2024 Oscars",
  choices : ["Jimmy Kimmel", "Jimmy Fallon", "Jimmy Tallon", "Jim Michael"],
  answer: "Jimmy Kimmel"
}

document.getElementById("question").innerText = question1.question;
document.getElementById("choice1").innerText = question1.choices[0];
document.getElementById("choice2").innerText = question1.choices[1];
document.getElementById("choice3").innerText = question1.choices[2];
document.getElementById("choice4").innerText = question1.choices[3];

function checkAnswer(userAnswer){
  if (userAnswer === question1.answer){
    alert("correct!");
  }
  else {
    alert("wrong!");
  }
}
// var questionTitle = document.getElementById("question");
// var selectionList = document.getElementById("Answers");
// var nextButton = document.getElementById("next");

// if(questionTitle === correctAnswer)









    
    


