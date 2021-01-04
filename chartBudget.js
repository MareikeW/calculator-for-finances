
const button = document.getElementById("budget-button");
const einkommen = document.getElementById("einkommen");
const sonstEinnahmen = document.getElementById("sonstige-einnahmen");
const ergebnisContainer =  document.getElementById("chart-budget");
const printSeite = document.getElementById("printSeite");
let sumEinnahmen = 0;
let sumAusgaben = 0;
let ergebnis = 0;

button.addEventListener("click", getEinnahmen);

function getEinnahmen(event) {
    event.preventDefault();
    let einnahmenFelder = document.getElementsByClassName("einnahmen");
    let einnahmenArray = [];

    for (let i = 0; i < einnahmenFelder.length; i++) {
        einnahmenArray.push(parseInt(einnahmenFelder[i].value));
    }
    addEinnahmen = (a, b) =>  a + b;
    sumEinnahmen = einnahmenArray.reduce(addEinnahmen);

    getDifferenz(sumEinnahmen);
}

function getDifferenz(sumEinnahmen) {
    let ausgabenFelder = document.getElementsByClassName("ausgaben");
    let ausgabenArray = [];

    for (let i = 0; i < ausgabenFelder.length; i++) {
        ausgabenArray.push(parseInt(ausgabenFelder[i].value));
    }

    addAusgaben = (a, b) =>  a + b;
    sumAusgaben = ausgabenArray.reduce(addAusgaben);
   
    ergebnis = sumEinnahmen - sumAusgaben;

    displayErgebnis(ergebnis);
}

function displayErgebnis(ergebnis) {
let isNegativ = ergebnis < 0;

    if (isNegativ) {
        ergebnisContainer.style.color = "red";
        ergebnisContainer.style.borderColor = "red";
        ergebnisContainer.style.backgroundColor = "#FCEAFF";
    } else {
        ergebnisContainer.style.color = "#FCEAFF";
        ergebnisContainer.style.borderColor = "#FCEAFF";
        ergebnisContainer.style.backgroundColor = "rgb(0,90,255)"
    }

    ergebnisContainer.innerHTML = 
    `<p>${isNegativ 
        ? "Differenz: " + ergebnis + "€ - Du hast leider nicht genügend Geld." 
        : "Differenz: " + ergebnis + "€" }
    </p>`;

    printSeite.style.display = "block";
}