function birthday(input){

let naemNaZalata = Number(input[0]);

let cake = naemNaZalata * 0.20;
let drinks = cake - (cake * 0.45);
let animator = naemNaZalata / 3;

let totalSum = cake + drinks + animator + naemNaZalata;

console.log(totalSum);

}

birthday(["2250"]);

