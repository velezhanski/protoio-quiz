function buildQuiz(quizContainer) {
  var quizData = [];

  jsonData.questions.forEach((question) => {
    var answers = []

    if (question.question_type == "mutiplechoice-single") {
      question.possible_answers.forEach((answer) => {
        answers.push(
          `<label>
            <input type="radio" name="question${answer.a_id}" value="${answer.caption}">
            ${answer.a_id} :
            ${answer.caption}
          </label>`
        )
      })
    }

    quizData.push(
      `<div class="slide">
        <div class="question"> ${question.title} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>`
    );
  });
  return quizData;
}