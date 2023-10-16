const dictionary = {
  how: "як",
  where: "де",
  when: "коли",
  what: "що",
  why: "чому",
  which: "який",
};
// функція, яка рандомно викликає та виводить ключі
const keyFunction = () => {
  const key = Object.keys(dictionary);
  const randomKey = key[Math.floor(Math.random() * key.length)];
  const keyWord = document.querySelector(".keyWordLi");

  keyWord.insertAdjacentHTML("afterbegin", `<li>${randomKey}</li>`);
};
//start button
const start = document.getElementById("start");
start.addEventListener(`click`, function () {
  keyFunction();  
});

// DOM перетворення
const answer = document.getElementById("myInput");
const button = document.getElementById("myButton");
const valueWord = document.querySelector(`.valueWord`);

// прив'язка до кнопки та вивод значення
button.addEventListener(`click`, function () {
  const userAnswer = answer.value.trim();
  if (userAnswer !== "") {
    valueWord.insertAdjacentHTML("afterbegin", `<li>${userAnswer}</li>`);
    answer.value = ""; //очищення ввода
    keyFunction();
  } else {
    alert(`Введіть відповідь`);
  }
});
