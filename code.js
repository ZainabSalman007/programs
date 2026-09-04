const tempInput = document.getElementById("temperature");
const result = document.getElementById("result");
const submit = document.getElementById("submit");

submit.onclick = function checkTemperature() {
    const temperature = tempInput.value;
    if (temperature > 30) {
        result.textContent = "It's hot outside!";
    } else if (temperature >= 15 && temperature <= 30) {
        result.textContent = "The weather is pleasant.";
    } else {
        result.textContent = "It's cold outside.";
    }
}
    