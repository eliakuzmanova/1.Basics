function vacationBooksList(input){


    let totalPages = Number(input[0]);
    let page = Number(input[1]);
    let days = Number(input[2]);

    let hours = totalPages / page;
    let totalSum = hours / days;

    console.log(totalSum);

}

vacationBooksList(["212", "20", "2"]);