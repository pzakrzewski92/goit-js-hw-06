const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
    if (textInput.length <= `${document.input.data-length}`) {
        $('#validation-input').addClass('validation-input.valid');
    } else {
        $('#validation-input').addClass('validation-input.invalid');
    }
  
});