function petShop(input){

   let priceFoodDog = Number(2.50);
   let foodDog = Number(input[0]);
   let allPriceDogFood = priceFoodDog * foodDog;

   let priceFoodCat = Number(4);
   let foodCat = Number(input[1]);
   let allPriceCatFood = priceFoodCat * foodCat;

   let allPrice = allPriceCatFood + allPriceDogFood;
   
   console.log(allPrice + " lv. ")

}

petShop(["13", "9"])