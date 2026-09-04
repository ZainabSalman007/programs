const age = document.getElementById("age");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result");

function checkAge(age) {
    return age ;
}

function displayMessage() {
    if (checkAge(age.value) > 0 && checkAge(age.value) < 13) {
        result.textContent = "You are a kid.";
    }else if (checkAge(age.value) >= 13 && checkAge(age.value) <= 17) {
        result.textContent = "You are a teenager.";
    }else if (checkAge(age.value) >= 18 && checkAge(age.value) < 60) {
        result.textContent = "You are an adult.";
    }else if (checkAge(age.value) >= 60 && checkAge(age.value) <= 120) {
        result.textContent = "You are a senior citizen.";
    }else {
        result.textContent = "you do not exist Muhahahah .";
    }
}

submitButton.addEventListener("click", displayMessage);
