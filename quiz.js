const quiz = {
  topic1: {
    questions: ["who hosted the 2024 Oscars?", "who won Best Actress?", "Who won best actor?", "Who won best Director?", "Who won best original score", "who won best costume design?", "who won best supporting actor?"],
    
    answers: ["Jimmy Kimmel", "Emma Stone", "Cillian Murphy", "Christopher Nolan", "Ludwig Göransson", "Holly Waddington", "Robert Downey Jr"]
  },
}

function loadQuiz() {
  const questionContainer = document.getElementById('quiz');
  const questions = quiz.topic1.questions;}

  questions.forEach((question, index) => {
    const label = document.createElement('label');
    label.innerHTML = question + "<br>";}