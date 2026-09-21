const display = document.getElementById("display");

function work(input){
    display.value += input;
}

function erase(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";
    }
}

