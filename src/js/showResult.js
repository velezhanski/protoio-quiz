function showResult(resultsContainer) {
  console.log(resultsContainer)
  var maxScore = 0;
  var scorePercentage;
  var resultsData = [];

  jsonQuizData.questions.forEach((question) => {
    maxScore += question.points
  });

  scorePercentage = (score / maxScore) * 100;

  jsonResultsData.results.forEach((result) => {
    if (scorePercentage >= result.minpoints && scorePercentage <= result.maxpoints) {
      resultsData.push(
        `<h1>${result.title} - You Scored: ${scorePercentage}%</h1>
        <h2>${result.message}</h2>
        <img src="${result.img}" alt="${result.title}" style="width: 80%; height: auto; border-radius: 3px; padding: 10px;">`
      );
    }
  });

  resultsContainer.innerHTML = resultsData.join('');
  $('.hover_bkgr_fricc').show();
}