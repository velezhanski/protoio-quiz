function outputQuiz(topBarContainer) {
  var output;

  var output = (
    `<h1>${jsonData.title}</h1>
    <h2>${jsonData.description}</h2>`
  );

  topBarContainer.innerHTML = output;
}