let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let correctAnswer = num1 * num2;
let qustionEl = document.querySelector(".qustion");
let form = document.querySelector(".form");
let inputEl = document.getElementById("input");
let scoreEl = document.querySelector(".score");
let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerHTML = `score: ${score}`;

qustionEl.innerHTML = `what Is ${num1} Multiplay By ${num2} ?`;

form.addEventListener("submit", (e) => {
  let userAnswer = +inputEl.value;
  if (userAnswer == "") {
    e.preventDefault();
    alert("Pleas Enter Your Answer");
  } else {
    if (userAnswer === correctAnswer) {
      score++;
      updateLocalStorage();
    } else {
      score--;
      updateLocalStorage();
    }
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
