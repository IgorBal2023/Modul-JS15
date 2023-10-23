import { data } from "./dictionary.js";

let randomKey;
// DOM перетворення

const start = document.getElementById("start");
const answer = document.getElementById("myInput");
const button = document.getElementById("myButton");
const keyWord = document.querySelector(".keyWordLi");
const valueWord = document.querySelector(`.valueWord`);
const score = document.querySelector(`.score`);
score.innerText = 0;
let number = 1;
let dictionaryNumber = data[number]; // словники
const level = document.querySelector(`.level`);
level.innerText = `Level  `;

// функція, яка рандомно викликає та виводить ключі
const keyFunction = () => {
    const key = Object.keys(dictionaryNumber);
    randomKey = key[Math.floor(Math.random() * key.length)];

    level.innerText = `Level  ${number}`;
    keyWord.insertAdjacentHTML("afterbegin", `<li>${randomKey}</li>`);
};
// вивод значення
function insertAnswer() {
  const userAnswer = answer.value.trim();
  if(keyWord.textContent.trim() === ""){
    answer.value = "";
        alert("Натисніть 'Start'");
  }
  else if (userAnswer !== "") {
    valueWord.insertAdjacentHTML("beforeend", `<li>${userAnswer}</li>`);
    answer.value = ""; //очищення ввода
    // порівняння відповіді та додавання очок
    if (
      userAnswer.toLowerCase() === dictionaryNumber[randomKey].toLowerCase()
    ) {
      score.innerText = String(parseInt(score.innerText) + 1);
      if (parseInt(score.innerText) >= 10) {
        number++;
        score.innerText = 0;
        dictionaryNumber = data[number];
        clearOutput();
      }
    } else {
      score.innerText = String(parseInt(score.innerText) - 1);
    }
    keyFunction();
  } else {
    alert(`Введіть відповідь`);
  }
}
//start button прив'язка до кнопки
start.addEventListener(`click`, keyFunction, { once: true });
button.addEventListener(`click`, insertAnswer);
answer.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});
// очищення на наступному рівні
function clearOutput() {
  const keyWord = document.querySelector(".keyWordLi");
  const valueWord = document.querySelector(".valueWord");
  keyWord.innerHTML = "";
  valueWord.innerHTML = `<li class="firstString"> --- </li>`; // вирівнення строк
}
