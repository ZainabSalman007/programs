const password = document.getElementById("password");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.onclick = function() {
    const passwordValue = password.value;
    if (passwordValue.length < 8) {
        result.textContent = "Password must be at least 8 characters long.";
    }else if (!/[A-Z]/.test(passwordValue)) {
        result.textContent = "Password must contain at least one uppercase letter.";
    }else if (!/[a-z]/.test(passwordValue)) {
        result.textContent = "Password must contain at least one lowercase letter.";
    }else if (!/[0-9]/.test(passwordValue)) {
        result.textContent = "Password must contain at least one number.";
    }else {
        result.textContent = "Password is valid.";
    }
}