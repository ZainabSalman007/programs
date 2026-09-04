const amount = document.getElementById('amount');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

function totalPrice(amount) {
   return Number(amount.value);
}

function discountPrice() {
    let price = totalPrice(amount)
    let discount ;
    let finalPrice;

    if (price >= 100 ){
        discount = price * 0.20;
        finalPrice = price - discount;
        return `Your spent more than $100 so u get 20% discount and ur final price is ${finalPrice.toFixed(2)}`;
    }

    else if (price < 100 &&  price >= 50){
        discount = price * 0.10;
        finalPrice = price - discount;
        return `Your spent more than $50 but less than $100 so u get 10% discount and ur final price is ${finalPrice.toFixed(2)}`;
    }

    else {
        finalPrice= price;
        return `Your spent less than $50 so u get no discount and ur final price is ${finalPrice.toFixed(2)}`;
    }
}

function FinalPrice(){
    result.textContent=discountPrice()
}

submit.addEventListener("click" , FinalPrice)