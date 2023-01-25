function fishTank(input){

let duljina = Number(input[0]);
let schirochina = Number(input[1]);
let visochina = Number(input[2]);
let percent = Number(input[3]);

let obemFishTank = duljina * schirochina * visochina;
let obemVLitri = obemFishTank * 0.001;
let zaetoProstranstvo = percent / 100;
let neededLiters = obemVLitri * (1 - zaetoProstranstvo);

console.log(neededLiters);

}

fishTank(["105","77","89","18.5"])