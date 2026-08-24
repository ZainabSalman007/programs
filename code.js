const count = document.getElementById('count');
const plus = document.getElementById('+');
const minus = document.getElementById('-');
const reset = document.getElementById('reset');

let num = 0;

plus.onclick = function(){
    num++;
    count.textContent = num;
}

minus.onclick = function(){
    num--;
    count.textContent = num;
}

reset.onclick = function(){
    num = 0;
    count.textContent = num;
}