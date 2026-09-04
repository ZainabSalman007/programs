function greetings(name) {
    return "Hello, " + name + "!";
}

function displayGreeting() {
    const nameInput = document.getElementById("greetings");
    const resultParagraph = document.getElementById("result");
    const name = nameInput.value;
    const greetingMessage = greetings(name);
    resultParagraph.textContent = greetingMessage;
}

const button = document.getElementById("submit");
button.onclick = () => {
    displayGreeting();
};