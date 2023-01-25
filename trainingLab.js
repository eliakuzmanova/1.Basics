function trainingLab(input){

let w = Number(input[0]);
let h = Number(input[1]);

let schirochinaZala = h * 100;
let schirochinaBezKoridor = schirochinaZala - 100;
let schirochinaBuro = schirochinaBezKoridor / 70;
let buroSchirZakrug = Math.floor(schirochinaBuro);

let duljinaNaZala = w * 100;
let duljinaBuro = duljinaNaZala / 120;
let ZakrDuljBuro = Math.floor(duljinaBuro);
let broiMesta = (buroSchirZakrug * ZakrDuljBuro) - 3;

console.log(broiMesta);
}

trainingLab(["8.4","5.2"]);
