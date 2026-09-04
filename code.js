const age = document.getElementById("age");
const submitButton = document.getElementById("submit");
const result = document.getElementById("result");

function userAge(age) {
   let Age = age.value ;
   return Age;
}

function checkAge() {
    if (userAge(age.value) > 0 && userAge(age.value) < 13) {
      return "You are a kid.";
    }
    else if (userAge(age.value) >= 13 && userAge(age.value) <= 17) {
        return "You are a teenager.";
    }
    else if (userAge(age.value) >= 18 && userAge(age.value) < 60) {
        return "You are an adult.";
    }
    else if (userAge(age.value) >= 60 && userAge(age.value) <= 120) {
        return "You are a senior citizen.";
    }
    else {
        return "you do not exist Muhahahah .";
    }
}

function displayResult() {
    result.textContent = checkAge();
}
