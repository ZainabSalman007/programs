const display = document.getElementById("display");
const total = document.getElementById("total");

let calculated = false;

function work(input) {

    // If Error is showing, always start fresh
    if (display.value === "Error") {
        display.value = "";
        calculated = false;

        if (["+", "-", "*", "/"].includes(input)) {
            return;
        }
    }

    // If a result is showing
    else if (calculated) {

        // Numbers, decimal and brackets start a new calculation
        if (!["+", "-", "*", "/"].includes(input)) {
            display.value = "";
        }

        calculated = false;
    }

    const lastChar = display.value.slice(-1);

    const expressions = ["+", "-", "*", "/"];

    // Don't allow two operators in a row
    if (expressions.includes(input) && expressions.includes(lastChar)) {
        return;
    }

    // Don't allow more than one decimal in the same number
    if (input === ".") {
        const currentNumber = display.value.split(/[+\-*/()]/).pop();

        if (currentNumber.includes(".")) {
            return;
        }
    }

    // Don't allow an opening bracket after an operator
    if (input === "(" && lastChar === ")") {
        display.value += input;
        return;
    }

    // Don't allow a closing bracket at the beginning
    if (input === ")" && display.value === "") {
        return;
    }

    // Don't allow a closing bracket after an operator or opening bracket
    if (input === ")" && (expressions.includes(lastChar) || lastChar === "(")) {
        return;
    }

    // Don't allow more closing brackets than opening brackets
    if (input === ")") {
        const openBrackets = (display.value.match(/\(/g) || []).length;
        const closeBrackets = (display.value.match(/\)/g) || []).length;

        if (closeBrackets >= openBrackets) {
            return;
        }
    }

    display.value += input;
}

function erase() {
    display.value = "";
    total.textContent = "Total:";
    calculated = false;
}

function calculate() {
    try {
        if (display.value.includes("//")) {
            throw new Error("Invalid expression");
        }

        // Don't calculate if brackets are not closed
        const openBrackets = (display.value.match(/\(/g) || []).length;
        const closeBrackets = (display.value.match(/\)/g) || []).length;

        if (openBrackets !== closeBrackets) {
            throw new Error("Invalid brackets");
        }

        let expression = display.value;

        // Add multiplication between a number and an opening bracket
        expression = expression.replace(/(\d|\))\(/g, "$1*(");

        // Add multiplication between a closing bracket and a number
        expression = expression.replace(/\)(\d)/g, ")*$1");

        display.value = eval(expression);
        total.textContent = "Total: " + display.value;
        calculated = true;
    }
    catch {
        display.value = "Error";
        calculated = true;
    }
}

function backspace() {
    if (calculated) {
        display.value = "";
        calculated = false;
    } else {
        display.value = display.value.slice(0, -1);
    }
}

document.addEventListener("keydown", function(event) {

    if (event.key === "+") {
        work("+");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "-") {
        work("-");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "*") {
        work("*");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "/") {
        work("/");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "1") {
        work("1");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "2") {
        work("2");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "3") {
        work("3");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "4") {
        work("4");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "5") {
        work("5");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "6") {
        work("6");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "7") {
        work("7");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "8") {
        work("8");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "9") {
        work("9");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "0") {
        work("0");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === ".") {
        work(".");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "(") {
        work("(");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === ")") {
        work(")");
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Backspace") {
        backspace();
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        event.preventDefault();
        calculate();
    }

});