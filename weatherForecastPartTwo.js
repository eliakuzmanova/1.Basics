function weatherForecastPartTwo(input){

    let num = Number(input);
    
    
     if(num >= 26.00 && num <= 35.00 ) {
        console.log("Hot");
    
    } else if(num >= 20.1 && num <= 25.9) {
        console.log("Warm");
    
    } else if(num >= 15.00 && num <= 20.00) {
        console.log("Mild");
    
    } else if(num >= 12.00 && num <= 14.9) {
        console.log("Cold");
    
    } else if(num >= 5.00 && num <= 11.9) {
       console.log("Cold");
    
    } else {
       console.log("unknown");
    
    }


    }
weatherForecastPartTwo([""])