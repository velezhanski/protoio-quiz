// Here we get the Quiz Data from the JSON file and put it into the jsonQuizData variable
function getQuizData() {
  var jsonQuizData
  $.ajax({
    type: "Get",
    url: "https://proto.io/en/jobs/candidate-questions/quiz.json",
    async: false,
    dataType: "json",
    success: function (data) {
      jsonQuizData = data;
    },
    error: function () {
      alert("json not found");
    }
  });

  return jsonQuizData
}

// Here we get the Result Data from the JSON file and put it into the jsonResultsData variable
function getResultsData() {
  var jsonResultsData
  $.ajax({
    type: "Get",
    url: "https://proto.io/en/jobs/candidate-questions/result.json",
    async: false,
    dataType: "json",
    success: function (data) {
      jsonResultsData = data;
    },
    error: function () {
      alert("json not found");
    }
  });

  return jsonResultsData
}