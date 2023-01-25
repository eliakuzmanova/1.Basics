function suppliesForSchool(input){

    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let preparat = Number(input[2]);
    let procentage = Number(input[3]);
    
    let pricePens = pens * 5.80;
    let priceMarkers = markers * 7.20;
    let pricePreparat = preparat * 1.20;

    let totalPrice = pricePens + priceMarkers + pricePreparat;
    let sum = totalPrice * (procentage / 100);
    let totalSum = totalPrice - sum;

    console.log(totalSum);
 

}

suppliesForSchool(["2","3","4","25"]);