let startValue = document.querySelector('#value')
let counterValue = parseInt(startValue.innerHTML)
let button = document.querySelectorAll('#counter button')

button.forEach(el =>  {
    el.addEventListener("click", (event) => {
        event.preventDefault();
        const{
            element: button
        } = event.currentTarget;
        console.log(button.value);
    });
//     if (dataset.action === "decrement") {
//         counterValue = counterValue - 1;
//     }
//     counterValue = counterValue + 1;
//     })  

//     const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });