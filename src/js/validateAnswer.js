function validateAnswer(currentQuestionId) {
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');
  
  var question = jsonData.questions.filter(obj => {
    return obj.q_id === currentQuestionId + 1
  })

  // find selected answer
  const answerContainer = answerContainers[currentQuestionId];
  const selector = `input[name=question${question[0].q_id}]:checked`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  // if answer is correct
  if (userAnswer == question[0].correct_answer) {
    answerContainer.querySelector(selector).parentElement.style.color = 'lightgreen';

  } else {
    answerContainer.querySelector(selector).parentElement.style.color = 'red';
    answerContainer.querySelector(`input[value="${question[0].correct_answer}"]`).parentElement.style.color = 'lightgreen';

  }
}