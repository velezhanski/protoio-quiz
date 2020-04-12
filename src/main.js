// Get's the data from the JSON file
var jsonQuizData = getQuizData();
var jsonResultsData = getResultsData();

// Builds the Quiz
const topBarContainer = document.getElementById('topContainer');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');

var quizData = buildQuiz(topBarContainer, quizContainer);

// Variables
const nextButton = document.getElementById("next");
const submitButton = document.getElementById('submit');
var score = 0;

// Switches to next Slide
nextButton.addEventListener("click", function () {
  showNextSlide(currentSlide)
});

// Controls the Slides
let currentSlide = 0
slideController(currentSlide);

submitButton.addEventListener("click", function () {
  validateAnswer(currentSlide);
  showResult(resultsContainer);
  $('.hover_bkgr_fricc').show();
});