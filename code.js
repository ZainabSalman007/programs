function rollDice(){
    const diceNo = document.getElementById("diceNo").value;
    const diceImages = document.getElementById("diceImages");
    const diceResult = document.getElementById("diceResult");
    const values=[];
    const images=[];   

    for(let i = 0 ; i < diceNo ; i++ ){
        const num = Math.floor(Math.random() * 6) + 1;
        values.push(num);
        images.push(`<img src="dice.images/${num}.png" alt="dice${num}">`)
     
    }

    diceResult.textContent= `dice: ${values.join(" , ")}`;
    diceImages.innerHTML= images.join(" ") 
}