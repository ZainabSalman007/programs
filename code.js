const minNum = 0;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}:`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number.");
        continue;
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert(`Please enter a number between ${minNum} and ${maxNum}.`);
        continue;
    }
    else {
        attempts++;
        if (guess === answer) {
            window.alert(`Congratulations! You guessed the number in ${attempts} attempts.`);
            running = false;
        }
        else if (guess < answer) {
            window.alert("Too low! Try again.");
        }
        else {
            window.alert("Too high! Try again.");
        }
    }
}
