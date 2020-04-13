function validateAnswer(currentQuestionId) {
  // Disabling next button until next slide is shown
  nextButton.disabled = true;

  // Gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // Selects current Question
  var question = jsonQuizData.questions.filter(obj => {
    return obj.q_id === currentQuestionId + 1
  })

  // Selects answer container
  const answerContainer = answerContainers[currentQuestionId];
  const selector = `input[name=question${question[0].q_id}]:checked`;

  // Validates mutiplechoice-single and truefalse
  if (question[0].question_type == "mutiplechoice-single" || question[0].question_type == "truefalse") {
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer == question[0].correct_answer) {
      score += jsonQuizData.questions[currentQuestionId].points;
      answerContainer.querySelector(selector).parentElement.style.color = 'lightgreen';

    } else {
      if (userAnswer != undefined) {
        answerContainer.querySelector(selector).parentElement.style.color = 'red';
      }
      answerContainer.querySelector(`input[value="${question[0].correct_answer}"]`).parentElement.style.color = 'lightgreen';
    }

    // Validates mutiplechoice-multi
  } else if (question[0].question_type == "mutiplechoice-multiple") {
    var userAnswer = [];
    var selected = document.querySelectorAll(selector);

    for (var i = 0; i < selected.length; i++) {
      userAnswer.push(parseInt(selected[i].value))
    }

    if (userAnswer.toString() == question[0].correct_answer.toString()) {
      score += jsonQuizData.questions[currentQuestionId].points;
      for (var i = 0; i < selected.length; i++) {
        selected[i].parentElement.style.color = "lightgreen"
      }
      
    } else {
      if (userAnswer != []) {
        for (var i = 0; i < selected.length; i++) {
          selected[i].parentElement.style.color = "red"
        }
      }
      for (var i = 0; i < question[0].correct_answer.length; i++) {
        answerContainer.querySelector(`input[value="${question[0].correct_answer[i]}"]`).parentElement.style.color = 'lightgreen';
      }
    }
  }
}