import { questions, showQuestion, evaluateAnswer, submit, result, inputs } from './script';

describe('Oscars Quiz', () => {
  it('should have 3 questions', () => {
    expect(questions.length).toBe(3);
  });

  it('should have correct answers', () => {
    expect(questions[0].correct).toBe(0);
    expect(questions[1].correct).toBe(2);
    expect(questions[2].correct).toBe(1);
  });

  it('should prompt user for answer and log correct or incorrect', () => {
    global.prompt = jest.fn();
    global.console.log = jest.fn();

    showQuestion();
    submit.click();

    expect(prompt).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(1);
  });

  it('should log correct answer', () => {
    global.prompt = jest.fn().mockReturnValue(questions[0].choices[0]);
    global.console.log = jest.fn();

    showQuestion();
    submit.click();

    expect(console.log).toHaveBeenCalledWith(resultText.correct + goNextMessage);
  });

  it('should log incorrect answer', () => {
    global.prompt = jest.fn().mockReturnValue(questions[0].choices[1]);
    global.console.log = jest.fn();

    showQuestion();
    submit.click();

    expect(console.log).toHaveBeenCalledWith(resultText.wrong + goNextMessage);
  });
});
