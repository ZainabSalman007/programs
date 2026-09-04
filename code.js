const age = document.getElementById("age");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result");

function userAge(age) {
   return age.value;
}

function checkAge() {
    let Age = userAge(age);

    if (Age > 0 && Age < 13) {
      return "You are a kid.";
    }

    else if (Age >= 13 && Age <= 17) {
        return "You are a teenager.";
    }

    else if (Age >= 18 && Age < 60) {
        return "You are an adult.";
    }

    else if (Age >= 60 && Age <= 120) {
        return "You are a senior citizen.";
    }

    else {
        return "you do not exist Muhahahah .";
    }
}

function displayResult() {
    result.textContent = checkAge();
}

submitButton.addEventListener("click", displayResult);