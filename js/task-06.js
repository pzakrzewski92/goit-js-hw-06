const textInput = document.querySelector("#validation-input");

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

textInput.addEventListener("blur", (event) => {
    if (textInput.length <= 6) {
        event.target.style.border = 'document.#validation-input.valid';
    } else {
        event.target.style.border = 'document.#validation-input.invalid';
    }
  
});