const dictionary = {
  how: "як",
  where: "де",
  when: "коли",
  what: "що",
  why: "чому",
  which: "який",
};

let randomKey;
// функція, яка рандомно викликає та виводить ключі
const keyFunction = () => {
  const key = Object.keys(dictionary);
  randomKey = key[Math.floor(Math.random() * key.length)];
  const keyWord = document.querySelector(".keyWordLi");

  keyWord.insertAdjacentHTML("afterbegin", `<li>${randomKey}</li>`);
};

// DOM перетворення
const answer = document.getElementById("myInput");
const button = document.getElementById("myButton");
const valueWord = document.querySelector(`.valueWord`);
let score = document.querySelector(`.score`);

// прив'язка до кнопки та вивод значення
button.addEventListener(`click`, function () {
  const userAnswer = answer.value.trim();
  if (userAnswer !== "") {
    valueWord.insertAdjacentHTML("afterend", `<li>${userAnswer}</li>`);
    answer.value = ""; //очищення ввода
    // порівняння відповіді та додавання очок
    if (userAnswer.toLowerCase() === dictionary[randomKey].toLowerCase()) {
      score.innerText = String(parseInt(score.innerText, 10) + 1);
    } else {
      score.innerText = String(parseInt(score.innerText, 10) - 1);
    }
    keyFunction();
  } else {
    alert(`Введіть відповідь`);
  }
});
//start button
const start = document.getElementById("start");
start.addEventListener(`click`, function () {
  keyFunction();
});
