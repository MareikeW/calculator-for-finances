
let button = document.getElementById("budget-button");
let einkommen = document.getElementById("einkommen");
let sonstEinnahmen = document.getElementById("sonstige-einnahmen");
let restbetragAnzeige = document.getElementById("amount-left-banner");


einkommen.addEventListener("input", setRestbetrag);

function setRestbetrag(event) {
    event.preventDefault();
    restbetragAnzeige.textContent = "Restbetrag " + event.target.value;
    restbetragAnzeige.style.display = "block";
    return restbetragAnzeige;
}

button.addEventListener("click", send);

function send(event) {
    event.preventDefault();
    let restbetrag = parseInt(document.getElementById("einkommen").value);
    console.log(restbetrag)
    document.getElementById("chart-budget").innerHTML = restbetrag;
}

