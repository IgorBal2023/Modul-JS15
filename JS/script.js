import { data } from "./dictionary.js";

let randomKey;
// DOM перетворення
const start = document.getElementById("start");
const answer = document.getElementById("myInput");
const button = document.getElementById("myButton");
const keyWord = document.querySelector(".keyWordLi");
const valueWord = document.querySelector(`.firstString`);
const score = document.querySelector(`.score`);
score.innerText = 0;
let number = 1;
let dictionaryNumber = data[number]; // словники
const level = document.querySelector(`.level`);
level.innerText = `Level  `;
const errorWords = [];
const errorArrow = document.querySelector(`.errorWordsUl`);

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
  if (keyWord.textContent.trim() === "") {
    answer.value = "";
    alert("Натисніть 'Start'");
  } else if (userAnswer !== "") {
    answer.value = ""; //очищення ввода
    coinAnswer(userAnswer);
  } else {
    alert(`Введіть відповідь`);
  }
}

// порівняння відповіді та додавання очок
function coinAnswer(userAnswer) {
  if (userAnswer.toLowerCase() === dictionaryNumber[randomKey].toLowerCase()) {
    score.innerText = String(parseInt(score.innerText) + 1);
    valueWord.insertAdjacentHTML(
      "afterend",
      `<li class="correctAnswer">${userAnswer}</li>`
    );
    if (parseInt(score.innerText) >= 10) {
      number++;
      score.innerText = 0;
      dictionaryNumber = data[number];
      clearOutput();
    }
  } else {
    score.innerText = String(parseInt(score.innerText) - 1);
    valueWord.insertAdjacentHTML(
      "afterend",
      `<li class="inCorrectAnswer">${userAnswer}</li>`
    );
    errorWords.push(randomKey); //запис невірних відповідей
    errorArrowFoo();
  }
  keyFunction();
}

//start button прив'язка до кнопки
start.addEventListener(`click`, keyFunction, { once: true });
button.addEventListener(`click`, insertAnswer);
answer.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});

// очищення на наступному рівні
function clearOutput() {
  const keyWord = document.querySelector(".keyWordLi");
  const valueWords = document.querySelectorAll(".valueWord li");
  keyWord.innerHTML = "";
  for (let i = 1; i < valueWords.length; i++) {
    valueWords[i].remove();
  }
}

// фільтрація та виведення невірних відповідей
function errorArrowFoo() {
  const errorWordsFilter = [...new Set(errorWords)];
  errorArrow.innerHTML = "";
  errorWordsFilter.forEach((item) => {
    const errorWordsLi = document.createElement("li");
    errorWordsLi.textContent = item;
    errorWordsLi.style.color = "red";
    errorArrow.appendChild(errorWordsLi);
  });
}
