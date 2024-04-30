import oscarsQuiz from './oscarsQuiz';

describe('Oscars Quiz', () => {
  it('should have 3 questions', () => {
    expect(oscarsQuiz.length).toBe(3);
  });

  var questionIndex = 0;
var length1 = allQuestions.length;
var correctAnswer = 0;

for (var i = 0; i < oscarsQuiz.length; i++) {
  var userAnswer = prompt(quiz[i].Question);

  if (userAnswer === oscarsQuiz[i].Answers[3]) {
    console.log("Correct!");
  } else {
    console.log("Incorrect");
  }
}
}