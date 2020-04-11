// Here we get the Quiz Data from the JSON file and put it into the jsonData variable
function getJsonData() {
  var jsonData
  $.ajax({
    type: "Get",
    url: "https://proto.io/en/jobs/candidate-questions/quiz.json",
    async: false,
    dataType: "json",
    success: function (data) {
      jsonData = data;
    },
    error: function () {
      alert("json not found");
    }
  });
  return jsonData
}