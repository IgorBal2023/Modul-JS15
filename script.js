const dictionary = {
  how: "як",
  where: "де",
  when: "коли",
  what: "що",
  why: "чому",
  which: "який",
};
const key = Object.keys(dictionary);
const randomKey = key[Math.floor(Math.random() * key.length)];
const keyWord = document.querySelector(".keyWordAll");

keyWord.insertAdjacentHTML("afterbegin", `<p>${randomKey}</p>`);

const answer = document.getElementById("myInput");
const button = document.getElementById("myButton");
const valueWord = document.querySelector(`.valueWordAll`);

button.addEventListener(`click`, function () {
    const userAnswer = answer.value.trim();
  if (userAnswer !== ""){
    valueWord.insertAdjacentHTML("afterbegin", `<p>${userAnswer}</p>`);
    answer.value = "";
}
});
