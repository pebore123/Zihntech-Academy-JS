const storedUser = {
    username: "ada",
    password: "zihntech123"
};
let attempts = 0;

const loginForm = document.querySelector("#loginForm");
const loginUsername = document.querySelector("#loginUsername");
const loginpassword = document.querySelector("#loginpassword");
const loginMsg = document.querySelector("#loginMsg");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    if (attempts >= 3) {
        loginMsg.textContent = "Too many attempts. Try later";
        loginMsg.style.color = "red";
        return;
    }
    const username = loginUsername.value.trim();
    const password = loginpassword.value;

    if (username !== storedUser.username) {
        loginMsg.textContent = "Username not found";
        loginMsg.style.color = "red";
        attempts++;
    }
    else if (password !==
        storedUser.password) {
            loginMsg.textContent = "incorrect password";
            loginMsg.style.color = "red";
            attempts++;
        }
        else {loginMsg.textContent = "Login successful! Welcome back.";
            loginMsg.style.color = "green";
            attempts = 0;
            loginForm.reset();
        }
    
});