const bill = document.getElementById('bill');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

function billAmount(bill) {
   return Number(bill.value);
}

function serviceCharges() {
    let price = billAmount(bill);
    let tax ;
    let finalPrice;

    if (price >= 50 ){
        tax = price * 0.10;
        finalPrice = price + tax;
        return `Your spent more than $50 so u have to pay 10% service charges and ur final price is ${finalPrice.toFixed(2)}`;
    }

    else {
        tax = price * 0.05;
        finalPrice = price + tax;
        return `Your spent less than $50 so u have to pay 5% service charges and ur final price is ${finalPrice.toFixed(2)}`;
    }

}

function FinalPrice(){
    result.textContent=serviceCharges()
}

submit.addEventListener("click" , FinalPrice)