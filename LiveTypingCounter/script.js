const greetings = document.querySelector("#greeting");
const nameInput = document.querySelector("#nameinput");
const counter = document.querySelector("#counter");
nameInput.addEventListener("input", function () {
    greetings.textContent = `Hello, ${nameInput.value}!`;
    counter.textContent = `${nameInput.value.length} characters`;
});