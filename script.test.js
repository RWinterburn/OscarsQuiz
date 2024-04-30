describe('checkAnswer function', () => {
  it('should return "correct!" when the userAnswer is correct', () => {
    const userAnswer = 'Jimmy Kimmel';
    expect(checkAnswer(userAnswer)).toBe('correct!');
  });

  it('should return "wrong!" when the user answer is incorrect', () => {
    const userAnswer = 'Jimmy Fallon';
    expect(checkAnswer(userAnswer)).toBe('wrong!');
  });
});