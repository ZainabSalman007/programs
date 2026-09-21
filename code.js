    const number = document.getElementById("number");
    const submit = document.getElementById("submit");
    const result = document.getElementById("result");

    function calculate(){
        if(number.value % 2 == 0){
            result.textContent = "the  number is even."
        } 
        else{
            result.textContent = "the number is odd."
        }
    }