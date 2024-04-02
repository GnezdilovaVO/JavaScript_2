"use strict";
// const divEl = document.createElement("div");
// divEl.classList.add("item");
// const parentDivEl = document.querySelector("div.block");
// parentDivEl.appendChild(divEl);
// divEl.innerHTML = "Элемент внутри";
// divEl.setAttribute("class", divEl.getAttribute("class") + " item_1");

// const textEl = document.querySelector("div.elem div.content p.text");
// console.log(textEl.innerHTML);
// console.log(textEl.previousElementSibling.innerHTML);
// console.log(textEl.parentElement);
// console.log(textEl.parentElement.previousElementSibling);
// console.log(textEl.parentElement.parentElement);

// const hEl = document.querySelector("h2.subtitle");
// let currentEL = hEl;
// while (currentEL.parentElement.tagName !== "BODY") {
//   console.log(currentEL.parentElement);
//   currentEL = currentEL.parentElement;
// }

// const hEl = document.querySelector("h2.subtitle");
// function findParents(el) {
//   console.log(el);
//   if (el.parentElement.tagName !== "BODY") {
//     findParents(el.parentElement);
//   }
// }
// findParents(hEl);

const btnEl = document.querySelector("form button.btn");
const inputEl = document.querySelector("form input[type='text']");
btnEl.onclick = function (e) {
  if (!inputEl.value && !document.querySelector("form h2")) {
    const h2El = document.createElement("h2");
    h2El.innerHTML = "Вы не заполнили поле ввода";
    btnEl.parentElement.appendChild(h2El);
    inputEl.style.border = "1px solid red";
  }
};
