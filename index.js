
let saveEL = document.getElementById("save-el");
let countEL = document.getElementById("count-el");
let count = 0;


function increment() {
    count = count +1

    countEL.innerHTML = count;
}

function save (){

    let countStr = count + " - "
    saveEL.innerHTML = saveEL.innerHTML + countStr;
    countEL.innerHTML = 0;
    count = 0;
   
}

