function basketballequipment(input){

let taksazagodina = Number(input[0]);

let sneakers = taksazagodina - (taksazagodina * 0.40);
let equipment = sneakers - (sneakers * 0.20);
let ball = equipment / 4;
let aksesoari = ball / 5;

let totalSum = sneakers + equipment + ball + aksesoari + taksazagodina;

console.log(totalSum);

}

basketballequipment(["365"]);

