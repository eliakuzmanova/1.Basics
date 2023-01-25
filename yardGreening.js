function yardGreening(input){

    let ground = Number(input[0]);
    let price = Number(7.61);
    let allPrice = ground * price;

    let discountprocent = Number(0.18);
    let discount = discountprocent * allPrice;

    let finalprice = allPrice - discount;

   console.log(`The final price is: ${finalprice} lv.`)
   console.log(`The discount is: ${discount} lv.`)



}

yardGreening(["150"]);