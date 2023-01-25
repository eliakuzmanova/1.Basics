function fishLand(input){

let priceSkumriq = Number(input[0]);
let priceCaca = Number(input[1]);
let kilogramsPalamud = Number(input[2]);
let kilogramsSafrid = Number(input[3]);
let kilogramsMidi = Number(input[4]);

let pricePalamud = (priceSkumriq * 1.60) * kilogramsPalamud;
let priceSafrid = (priceCaca * 1.80) * kilogramsSafrid;
let priceMidi = kilogramsMidi * 7.50;

let allPrice = pricePalamud + priceSafrid + priceMidi;

let totalSum = allPrice.toFixed(2);

console.log(totalSum);
}

fishLand(["7.79","5.35","9.3","0","0"]);

//•	Паламуд – 60% по-скъп от скумрията
//Сафрид – 80% по-скъп от цацата
//•	Миди – 7.50 лв. за килогра


