const form = document.querySelector("#welcomeForm");
const username = document.querySelector("#username");
const message = document.querySelector("#message");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = username.value.trim();
    
    if (name === "") {
        message.textContent = "please type your name";
        message.style.color = "red";
    } else {
        message.textContent = `Welcome, ${name}!`;
        message.style.color = "green";
        username.value = "";
    }
});