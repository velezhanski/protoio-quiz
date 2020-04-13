// Here we build the actual output for the quiz and output it in the quizData variable 
function buildQuiz(headerContainer, quizContainer) {
  var quizData = [];

  // Title and Subtitle Output
  var output = (
    `<h1 class="title">${jsonQuizData.title}</h1>
    <hr>
    <h2 class="subtitle">${jsonQuizData.description}</h2>`
  );
  headerContainer.innerHTML = output;

  // Here we cycle throught the questions
  jsonQuizData.questions.forEach((question) => {
    var answers = []
    var images = []

    // Addition of the image
    images.push(
      `<img src="${question.img}" alt="${question.caption}">`
    )

    // Bellow is the logic which checks for what type of question it is
    if (question.question_type == "mutiplechoice-single") {
      question.possible_answers.forEach((answer) => {
        answers.push(
          `<label class="questionLabel">
            <input type="radio" name="question${question.q_id}" value="${answer.a_id}">
            ${answer.caption}
          </label>`
        )
      })
    } else if (question.question_type == "mutiplechoice-multiple") {
      question.possible_answers.forEach((answer) => {
        answers.push(
          `<label class="questionLabel">
            <input type="checkbox" name="question${question.q_id}" value="${answer.a_id}">
            ${answer.caption}
          </label>`
        )
      })
    } else if (question.question_type == "truefalse") {
      answers.push(
        `<label class="questionLabel">
            <input type="radio" name="question${question.q_id}" value="true">
            True
          </label>
          <label class="questionLabel">
            <input type="radio" name="question${question.q_id}" value="false">
            False
          </label>`
      )
    }

    // Here we insert the quiz data into the variable 
    quizData.push(
      `<div class="slide">
        <div class="question"> ${question.title} </div>
        <div class="answer-container">
        <div class="images">${images.join("")}</div>
        <div class="answers"> ${answers.join("")}</div>
        </div>
      </div>`
    );

  });

  quizContainer.innerHTML = quizData.join('');
}