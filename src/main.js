// Variables
const nextButton = document.getElementById("next");
const submitButton = document.getElementById('submit');
const topBarContainer = document.getElementById('topContainer');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
var score = 0;
var currentSlide = 0

// Get's the data from the JSON file
var jsonQuizData = getQuizData();
var jsonResultsData = getResultsData();

// Builds the Quiz
var quizData = buildQuiz(topBarContainer, quizContainer);

// Switches to next Slide
nextButton.addEventListener("click", function () {
  showNextSlide(currentSlide)
});

// Controls the Slides
slideController(currentSlide);

// Show Results
submitButton.addEventListener("click", function () {
  validateAnswer(currentSlide);
  showResult(resultsContainer);
  setTimeout(function () {
    $('.hover_bkgr_fricc').show();
  }, 3000);
});