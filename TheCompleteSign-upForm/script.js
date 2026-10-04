const signupForm = document.querySelector("#signupForm");
const fullName = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const terms= document.querySelector("#terms");
const signupMsg = document.querySelector("#signupMsg");
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = fullName.value.trim();
    const email = emailInput.value.trim();
    const age = ageInput.value.trim();
    const ageNumber = Number(age);
    const password = passwordInput.value;
    const confirmpassword = confirmPasswordInput.value;

    if (name ==="") {
        signupMsg.textContent = "full name is required";  
        signupMsg.style.color = "red";
    }
    else if (!email.includes("@") || !email.includes(".")) {
        signupMsg.textContent = "Enter a valid email";
        signupMsg.style.color = "red";
    }
    else if (age === "" || isNaN(ageNumber) || ageNumber <16) {
        signupMsg.textContent = "You must be at least 16 to sign up";
        signupMsg.style.color = "red";
    }
    else if (password.length < 8) {
        signupMsg.textContent = "password must be at least 8 characters";
        signupMsg.style.color = "red";
    }
    else if (password !== confirmpassword) {
        signupMsg.textContent = "passwords do not match";
        signupMsg.style.color = "red";
    }
    else if (terms.checked === false) {
        signupMsg.textContent = "You must agree to the terms";
        signupMsg.style.color = "red";
    }
    
    else {
        signupMsg.textContent = "Welcome, " + name + "! Your account has been created.";
        signupMsg.style.color = "green";
        signupForm.reset();
    }



  
});