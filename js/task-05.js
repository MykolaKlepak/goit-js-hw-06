const stringInput = document.querySelector("#name-input");
const changeName = document.querySelector("#name-output");


stringInput.addEventListener("input", (handlerEvent) => {changeName.textContent = handlerEvent.currentTarget.value.trim();

    if (changeName.textContent.length === 0) {
        changeName.textContent = "Anonymous";
    }});