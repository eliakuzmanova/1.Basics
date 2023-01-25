function changeBureau(input){

let broibitcoins = Number(input[0]);
let broikitaiskiiuni = Number(input[1]);
let broikomisionna = Number(input[2]);

let bitcoins = broibitcoins * 1168;
let dolari = 1 * 1.76;
let kitaiskaiuna =  broikitaiskiiuni * (dolari * 0.15);

let totalSum = bitcoins + kitaiskaiuna;
let euro = totalSum / 1.95;
let komisionna =  euro * (broikomisionna / 100);
let totalEuro = euro - komisionna;
let allEuro = totalEuro.toFixed(2);

console.log(allEuro);
}

changeBureau(["7",
"50200.12",
"3"]);

// 1 биткойн = 1168 лева.
// 1 китайски юан = 0.15 долара.
// 1 долар = 1.76 лева.
// 1 евро = 1.95 лева.
//Обменното бюро има комисионна от 0 до 5 процента от крайната сума в евро
