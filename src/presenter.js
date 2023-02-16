import multiplicar from "./multiplicador";
import sumar from "./sumador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const first1 = document.querySelector("#primer-numero1");
const second1 = document.querySelector("#segundo-numero1");
const form1 = document.querySelector("#sumar-form");
const form2 = document.querySelector("#multiplicar-form");
const div1 = document.querySelector("#resultado-div-suma");
const div2 = document.querySelector("#resultado-div-multiplicar");

form1.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div1.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first1.value);
  const secondNumber = Number.parseInt(second1.value);

  div2.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});