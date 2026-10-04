const password = document.querySelector("#password");
const strength = document.querySelector("#strength");
password.addEventListener("input", function () {
    const value = password.value;
    let hasNumber = false;
    for (let i = 0; i < value.length; i++) {
        if ("0123456789".includes(value[i])) {
            hasNumber = true;
        }
    }
    if (value.length < 6) {
        strength.textContent = "Weak";
        strength.style.color = "red";
        
    } else if (value.length < 10 ) {
        strength.textContent = "Medium";
        strength.style.color = "orange";

    } else if (value.length >= 10 && hasNumber) {
        strength.textContent = "Strong";
        strength.style.color = "green";
    }
    
    else {
        strength.textContent = "Medium";
        strength.style.color = "orange";
    }
});