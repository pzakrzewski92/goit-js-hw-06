const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
    if (textInput.length <= `${document.input.data-length}`) {
        element.style.border = 'document.#validation-input.valid';
    } else {
        element.style.border = 'document.#validation-input.invalid';
    }
  
});