// Variables
const nextButton = document.getElementById("next");
const submitButton = document.getElementById('submit');
const headerContainer = document.getElementById('header');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
var score = 0;
var currentSlide = 0

// Get's the data from the JSON file
var jsonQuizData = getQuizData();
var jsonResultsData = getResultsData();

// Builds the Quiz
var quizData = buildQuiz(headerContainer, quizContainer);

// Validates answer and switches to next slide
nextButton.addEventListener("click", function () {
  validateAnswer(currentSlide);
  setTimeout(function () {
    slideController(currentSlide + 1)
  }, 3000);
});

// Controls the Slides
slideController(currentSlide);

// Validate last answer and show results
submitButton.addEventListener("click", function () {
  validateAnswer(currentSlide);
  setTimeout(function () {
    showResult(resultsContainer);
  }, 3000);
});