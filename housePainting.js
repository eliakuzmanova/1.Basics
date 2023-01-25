function housePainting(input){

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let strana = x * y;
    let prozorec = 1.5 * 1.5;
    let dveteStrani = strana * 2 - (2 * prozorec);

    let zadnaStena = x * x;
    let vhod = 1.2 * 2;
    let prednazadna = zadnaStena * 2 - vhod;
    let obstaPloscht = prednazadna + dveteStrani;
    let zelenaBoq = obstaPloscht / 3.4;
    let allZelenaBoq = zelenaBoq.toFixed(2);


    let dvaPravougulnika = 2 * ( x * y);
    let dvaTriugulnika = 2 * (x * h / 2);
    let pokrivObsta = dvaTriugulnika + dvaPravougulnika;
    let chervenaBoq = pokrivObsta / 4.3;
    let allChervenaBoq = chervenaBoq.toFixed(2);


    console.log(allZelenaBoq);
    console.log(allChervenaBoq);
}

housePainting(["10.25","15.45","8.88"]);


