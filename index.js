console.clear();

//1.

const bookmark = document.querySelector('[data-js="bookmark-button"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("question-card__bookmark--remove");
});

const answerButton = document.querySelector('[data-js="buttonContainer"]');
const answer = document.querySelector('[data-js="answer"]');
const showHideToggle = document.querySelector('[data-js="showHideToggle"]');
let showAnswer = false;

answerButton.addEventListener("click", () => {
  showAnswer = !showAnswer;
  answer.classList.toggle("question-card__answer--hidden");

  if (showAnswer) {
    showHideToggle.textContent = "hide answer";
  } else {
    showHideToggle.textContent = "show answer";
  }
});

//2.
