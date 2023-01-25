function foodDelivery(input){

let chickenMenu = Number(input[0]);
let fishMenu = Number(input[1]);
let veganMenu = Number(input[2]);

let priceChicken = chickenMenu * 10.35;
let priceFish = fishMenu * 12.40;
let priceVegan = veganMenu * 8.15;

let priceMenu = priceChicken + priceFish + priceVegan;
let pricedecert = priceMenu * 0.20;
let delivery = 2.50;

let totalSum = priceMenu + pricedecert + delivery;

console.log(totalSum);


}

foodDelivery(["9","2","6"]);