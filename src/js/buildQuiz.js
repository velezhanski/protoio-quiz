// Here we build the actual output for the quiz and output it in the quizData variable 
function buildQuiz(quizContainer) {
  var quizData = [];

  // Here we cycle throught the questions
  jsonData.questions.forEach((question) => {
    var answers = []

    // Bellow is the logic which checks for what type of question it is
    if (question.question_type == "mutiplechoice-single") {
      question.possible_answers.forEach((answer) => {
        answers.push(
          `<label>
            <input type="radio" name="question${question.q_id}" value="${answer.a_id}">
            ${answer.caption}
          </label>`
        )
      })
    } else if (question.question_type == "mutiplechoice-multiple") {
      question.possible_answers.forEach((answer) => {
        answers.push(
          `<label>
            <input type="checkbox" name="question${question.q_id}" value="${answer.caption}">
            ${answer.caption}
          </label>`
        )
      })
    } else if (question.question_type == "truefalse") {
      answers.push(
        `<label>
            <input type="radio" name="truefalse" value="true">
            True
          </label>
          <label>
            <input type="radio" name="truefalse" value="false">
            False
          </label>`
      )
    }

    // Here we insert the quiz data into the variable 
    quizData.push(
      `<div class="slide">
        <div class="question"> ${question.title} </div>
        <div class="answers"> ${answers.join("")} </div>
      </div>`
    );

  });
  return quizData;
}