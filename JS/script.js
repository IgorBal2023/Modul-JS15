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
      keyWord.innerText = "--- Next level ---";
      keyWord.style.color = "lime";
      keyWord.style.fontSize = "2.3rem";
      setTimeout(function () {
        number++;
        score.innerText = 0;
        dictionaryNumber = data[number];
        keyWord.style.color = "black";
        clearOutput();
        keyFunction();
      }, 2000);
    } else {
      keyFunction();
    }
  } else {
    score.innerText = String(parseInt(score.innerText) - 1);
    valueWord.insertAdjacentHTML(
      "afterend",
      `<li class="inCorrectAnswer">${userAnswer}</li>`
    );
    errorWords.push(randomKey); //запис невірних відповідей
    errorArrowFoo();
    keyFunction();
  }
}

//start button прив'язка до кнопки, анімація кнопок
start.addEventListener(`click`, keyFunction, { once: true });
start.addEventListener(`click`, () => {
  (start.style.transform = `translateY(-3px)`),
    (start.style.boxShadow = `0 3px 6px rgba(0, 0, 0, 0.1)`),
    (start.style.backgroundColor = `lime`);
});
button.addEventListener(`click`, insertAnswer);
button.addEventListener(`mousedown`, () => {
  (button.style.transform = `translateY(-3px)`),
    (button.style.boxShadow = `0 3px 6px rgba(0, 0, 0, 0.1)`),
    (button.style.backgroundColor = `	gainsboro`);
});
button.addEventListener(`mouseup`, () => {
  (button.style.transform = `translateY(0px)`),
    (button.style.boxShadow = `5px 5px 10px rgba(0, 0, 0, 0.7)`),
    (button.style.backgroundColor = `white`);
});
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
