// const textInput = document.querySelector("#validation-input");

// textInput.addEventListener("blur", (event) => {
//     if (textInput.length >= `${document.input.data-length}`) {
//         $('#validation-input').addClass('validation-input.valid');
//     } else {
//         $('#validation-input').addClass('validation-input.invalid');
//     }
  
// });

// const inputEl = document.querySelector('#validation-input');
// const inputLengthEl = Number(inputEl.dataset.length);
// inputEl.addEventListener('blur', () => {
//     if (inputEl.value.length === inputLengthEl) {
//         inputEl.classList.add('valid');
//         inputEl.classList.remove('invalid');
//     } else {
//         inputEl.classList.add('invalid');
//         inputEl.classList.remove('valid');
//     }
// }
// );

const inputnameEl = document.querySelector('#validation-input');
console.log(inputnameEl.placeholder);
const validLength = parseInt(inputnameEl.getAttribute("data-length"))
console.log(validLength);
inputnameEl.addEventListener('blur', (event) =>
{if (event.currentTarget.value.length === validLength)
    {event.currentTarget.classList.add('valid')
    event.currentTarget.classList.remove('invalid')}
    else {event.currentTarget.classList.add('invalid')
event.currentTarget.classList.remove('valid')}});