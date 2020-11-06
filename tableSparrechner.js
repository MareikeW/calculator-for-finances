function fillTableSparrechner() {
   let start = document.getElementById("anfangskapital").value;
   let sparrate = document.getElementById("sparrate").value;
   let sparintervall = document.getElementById("sparintervall".value);
   let zinssatz = document.getElementById("zinssatz").value;
   let ansparzeit = document.getElementById("ansparzeit").value;
   let endkapital = document.getElementById("endkapital");
   let jahresEndkapital = 0;

    // Alle Werte werden als Strings ausgegeben und müssen in Zahlen umgewandelt werden
   start = Number(start);
   sparrate = Number(sparrate);
   zinssatz = Number(zinssatz);
   ansparzeit = Number(ansparzeit);
   jahresEndkapital += start;
   einzahlungen = 12 * sparrate;
   zinssatz = 1 + zinssatz / 100;
   console.log(jahresEndkapital)

   // Berechnet das Kapital am Ende jeden Jahres
   for (var i = 0; i < ansparzeit; i++) {
   jahresEndkapital = (jahresEndkapital + einzahlungen) * zinssatz;
   console.log(jahresEndkapital);
    }
    // Gibt Ergebnis in Ergebnisfeld aus
    endkapital.innerHTML = jahresEndkapital.toFixed(2);
   
}