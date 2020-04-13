function showResult(resultsContainer) {
  var maxScore = 0;
  var scorePercentage;
  var resultsData = [];

  // Counts the maximum possible score
  jsonQuizData.questions.forEach((question) => {
    maxScore += question.points
  });

  // Calculates the scored percentage
  scorePercentage = (score / maxScore) * 100;

  // Selects the correct score bracket
  jsonResultsData.results.forEach((result) => {
    if (scorePercentage >= result.minpoints && scorePercentage <= result.maxpoints) {
      resultsData.push(
        `<h1 class="title">${result.title} - You Scored: ${scorePercentage}%</h1>
        <h2 class="subtitle">${result.message}</h2>
        <img src="${result.img}" alt="${result.title}">`
      );
    }
  });

  // Outputs the achieved score
  resultsContainer.innerHTML = resultsData.join('');
  $('.hover_bkgr_fricc').show();
}