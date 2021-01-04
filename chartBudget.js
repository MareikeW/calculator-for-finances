
let button = document.getElementById("budget-button");
let einkommen = document.getElementById("einkommen");
let sonstEinnahmen = document.getElementById("sonstige-einnahmen");

button.addEventListener("click", getEinnahmen);
function getEinnahmen(event) {
    event.preventDefault();
    var einnahmenFelder = document.getElementsByClassName("einnahmen");
    var einnahmenArray = [];

    for (var i = 0; i < einnahmenFelder.length; i++) {
        einnahmenArray.push(parseInt(einnahmenFelder[i].value));
    }
    add = (a, b) =>  a + b;
    let sum = einnahmenArray.reduce(add);

    getDifferenz(sum);
}
function getDifferenz(sum) {
    var ausgabenFelder = document.getElementsByClassName("ausgaben");
    var ausgabenArray = [];

    for (var i = 0; i < ausgabenFelder.length; i++) {
        ausgabenArray.push(parseInt(ausgabenFelder[i].value));
    }
    add2 = (a, b) =>  a + b;
    let sum2 = ausgabenArray.reduce(add2);
   
    let ergebnis = sum - sum2;

    displayErgebnis(ergebnis);
}

function displayErgebnis(ergebnis) {

    ergebnis < 0 ? ergebnis.style.color = "red" : ergebnis.style.color = "black";
    document.getElementById("chart-budget").innerHTML = ergebnis;
}