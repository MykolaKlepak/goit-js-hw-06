const textImput = document.querySelector("#validation-input");

textImput.addEventListener("blur", () => {
    textImput.classList.toggle("valid", textImput.value.length >= 6);
    textImput.classList.toggle("invalid", textImput.value.length < 6);
});