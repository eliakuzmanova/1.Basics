function repeinting(input){

    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);
   
    let nylonPrice = (nylon  + 2) * 1.50;
    let paintPrice = (paint * 1.10) * 14.50;
    let razreditelPrice = razreditel * 5;
    let price = nylonPrice + paintPrice + razreditelPrice + 0.40;
    let hourswork = (price * 0.30) * hours;
    let totalSum = price + hourswork;

    console.log(totalSum);

}

repeinting(["5 ","10 ","10 ","1 "]);