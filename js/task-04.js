const sum = document.querySelector("#value");
const buttons = document.querySelectorAll("#counter button");
let currentValue = parseInt(sum.innerHTML);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.dataset.action === "decrement"
      ? currentValue--
      : button.dataset.action === "increment"
      ? currentValue++
      : "";
    sum.innerHTML = currentValue;
  });
});
//-----------------------
// const sum = document.querySelector("#value");
// const buttons = document.querySelectorAll("#counter button");
// let currentValue = parseInt(sum.innerHTML);
// buttons.forEach((button) => {
// //dodajesz event do każdego buttona z listy buttons
//   button.addEventListener("click", () => {
//    if(button.dataset.action === "decrement"){
// //jeśli ten buton ma data-action o wartosci decrement to wykonuje sie to
//       currentValue = counterValue - 1;
//    }else if(button.dataset.action === "increment"){
// //jeśli nie jest decrement a jest data-action = increment to wykonuje to
//       currentValue = counterValue + 1;
//    }
//     sum.innerHTML = currentValue;
// //podmienia na stronie wartość w spanie
//   });
// });