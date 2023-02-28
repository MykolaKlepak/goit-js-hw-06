const inputSlider = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");


inputSlider.addEventListener("input", (event) => {
    spanText.style.fontSize = event.target.value + "px";
});