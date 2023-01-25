function celsiusToFahrenheit(input){

let celsius = Number(input[0]);
let fahrenheit = celsius * 1.8000 + 32.00;
let allSum = fahrenheit.toFixed(2);

console.log(allSum)

}

celsiusToFahrenheit(["0"]);

//Напишете програма, която чете градуси по скалата на Целзий (°C) и ги преобразува до градуси по скалата на Фаренхайт (°F).
// °F =°C * 1.8000+ 32.00