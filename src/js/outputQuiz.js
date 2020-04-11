function outputQuiz(topBarContainer, quizContainer) {
  var output;

  var output = (
    `<h1>${jsonData.title}</h1>
    <h2>${jsonData.description}</h2>`
  );

  topBarContainer.innerHTML = output;
  quizContainer.innerHTML = quizData;
}