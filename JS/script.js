import { dictionary1 } from "./dictionary.js";

let randomKey;
// функція, яка рандомно викликає та виводить ключі
const keyFunction = () => {
  const key = Object.keys(dictionary1);
  randomKey = key[Math.floor(Math.random() * key.length)];
  const keyWord = document.querySelector(".keyWordLi");

  keyWord.insertAdjacentHTML("afterbegin", `<li>${randomKey}</li>`);
};

// DOM перетворення
const answer = document.getElementById("myInput");
const button = document.getElementById("myButton");
const valueWord = document.querySelector(`.valueWord`);
let score = document.querySelector(`.score`);
valueWord.insertAdjacentHTML("beforeend", `<li>---</li>`);

// прив'язка до кнопки та вивод значення
button.addEventListener(`click`, insertAnswer);
answer.addEventListener(`keydown`, function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});

function insertAnswer() {
  const userAnswer = answer.value.trim();
  if (userAnswer !== "") {
    valueWord.insertAdjacentHTML("afterend", `<li>${userAnswer}</li>`);
    answer.value = ""; //очищення ввода
    // порівняння відповіді та додавання очок
    if (userAnswer.toLowerCase() === dictionary1[randomKey].toLowerCase()) {
      score.innerText = String(parseInt(score.innerText) + 1);
    } else {
      score.innerText = String(parseInt(score.innerText) - 1);
    }
    keyFunction();
  } else {
    alert(`Введіть відповідь`);
  }
}
//start button
const start = document.getElementById("start");
start.addEventListener(`click`, keyFunction, { once: true });
