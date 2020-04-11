// Get's the data from the JSON file
var jsonData = getJsonData();

// Builds the Quiz
var quizData = buildQuiz();

// Outputs the result
const topBarContainer = document.getElementById('topContainer');
const quizContainer = document.getElementById('quizContainer');

var output = outputQuiz(topBarContainer, quizContainer);
