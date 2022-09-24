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
//   button.addEventListener("click", () => {
//    if(button.dataset.action === "decrement"){
//       currentValue--
//    }else if(button.dataset.action === "increment"){
//       currentValue++
//    }
//     sum.innerHTML = currentValue;
//   });
// });