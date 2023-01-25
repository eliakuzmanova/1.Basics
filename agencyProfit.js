function agencyProfit(input){

let name = input[0];
let adultsTickets = Number(input[1]);
let childstickets = Number(input[2]);
let netoprice = Number(input[3]);
let priceservice = Number(input[4]);

let priceChildTickets = netoprice - ( netoprice * 0.70 );
let totalPrice = ((netoprice + priceservice) * adultsTickets) + ((priceChildTickets + priceservice) * childstickets);
let gewinn = totalPrice * 0.20;
let sum = gewinn.toFixed(2);

console.log(`The profit of your agency from ${name} tickets is ${sum} lv.`);

}

agencyProfit(["WizzAir",
    "15",
    "5",
    "120",
    "40"
]);
