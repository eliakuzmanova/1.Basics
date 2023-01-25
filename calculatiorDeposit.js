function calculatorDeposit(input){

let depositSum = Number(input[0]);
let srokNaDepozitMeseci = Number(input[1]);
let percentageOfDepositForYear = Number(input[2]);

let percentDepositForYear = (percentageOfDepositForYear / 100 );

let percentageOfDepositForMonth = ( depositSum * percentDepositForYear ) / 12 ;
let totalSum = depositSum + srokNaDepozitMeseci * percentageOfDepositForMonth;

console.log(totalSum);

}

calculatorDeposit(["2350", "6", "7"]);