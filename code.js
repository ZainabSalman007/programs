const display = document.getElementById("display");
const total = document.getElementById("total");

function work(input) {
    display.value += input;
}

function erase() {
    display.value = "";
    total.textContent = "Total:";
}

function calculate() {
    try {
        if (display.value.includes("//")) {
            throw new Error("Invalid expression");
        }

        display.value = eval(display.value);
        total.textContent = "Total: " + display.value;
        calculated = true;
    }
    catch {
        display.value = "Error";
        calculated = true;
    }
}

function work(input) {
    display.value += input;
    calculated = false;
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
    if (event.key === "Backspace") { 

        if (calculated) {
            display.value = "";
            calculated = false;
        } else {
            display.value = display.value.slice(0, -1);
        }

    } 
});

function backspace() {
    if (calculated) {
        display.value = "";
        calculated = false;
    } else {
        display.value = display.value.slice(0, -1);
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculate();
    }
});
