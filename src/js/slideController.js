// Controls the slides
function slideController(n) {
  const slides = document.querySelectorAll(".slide");

  // Controls the visibility of the slides
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;

  // Controls the buttons
  if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
  nextButton.disabled = false;
}

// Validates answer and moves to next slide
function showNextSlide(currentQuestionId) {
  validateAnswer(currentQuestionId);
  setTimeout(function () {
    slideController(currentSlide + 1)
  }, 3000);
}