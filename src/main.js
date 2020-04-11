// Get's the data from the JSON file
var jsonData = getJsonData();

// Builds the Quiz
const topBarContainer = document.getElementById('topContainer');
var quizContainer = document.getElementById('quizContainer');

var quizData = buildQuiz(topBarContainer, quizContainer);

// Controls the Slides
var currentSlide = 0
slideController(currentSlide);