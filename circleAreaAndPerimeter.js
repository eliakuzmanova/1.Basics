function circleAreaAndPerimeter(input){

let r = Number(input[0]);

let s = Math.PI * (r * r);
let p = 2 * Math.PI * r;

let calculatedS = s.toFixed(2);
let calculatedP = p.toFixed(2);
console.log(calculatedS);
console.log(calculatedP);

}

circleAreaAndPerimeter(["3"]);
