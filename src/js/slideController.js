// Controls the slides
function slideController(n) {
  // Variables
  const nextButton = document.getElementById("next");
  const submitButton = document.getElementById('submit');
  const slides = document.querySelectorAll(".slide");

  // Switches to next Slide
  nextButton.addEventListener("click", function () {
    showNextSlide(n)
  });

  // Controls the visibility of the slides
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;

  // Checks if the slide is last or not 
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';

  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';

  }
}

function showNextSlide(currentQuestionId) {
  validateAnswer(currentQuestionId);

  setTimeout(function () {
    slideController(currentSlide + 1)
  }, 3000);
}