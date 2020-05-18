// Graph

// für canvas braucht man immer einen Kontext
let myChart = document.getElementById('myChart').getContext('2d');

// neues Objekt
let lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: [ 'Anfangskapital', '1.Jahr', '2.Jahr', '3.Jahr' ],
    datasets: [{
      label: 'Einnahmen',
      data: [
        1000,
        2800,
        2000,
        3000
      ],
      borderColor: 'pink',
      fill: false
    }]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks:
        {
          beginAtZero: true
        }
      }]
    },
    title: {
      display: true,
      text: 'Einnahmen in drei Jahren'
    }
  }
});

// Nach Klick auf "Berechnen" wird das Endkapital berechnet und ausgegeben
function calc() {
  var start = parseInt(document.getElementById('anfangskapital').value);
  var zins = parseInt(document.getElementById('zinssatz').value);
  var zeit = parseInt(document.getElementById('laufzeit').value);

  var ergebnis = start;

  for (var i = 1; i <= zeit; i++) {
    ergebnis = ergebnis * (1 + zins/ 100);
  }

  document.getElementById('endkapital').innerHTML = ergebnis.toFixed(2);
  //berechneEndkapital(start, zins, laufzeit);

//  var ergebnis = parseInt(start); // ohne pareInt start = String

  //return document.getElementById('endkapital').innerHTML = ergebnis;
}

//function  berechneEndkapital({ start, zins, laufzeit }) {
    //var i = 0;

  //  while (i < laufzeit) {
  //    var ergebnis += start * (1 + (zins/100));
  //    i++;
  //  }
  //  return ergebnis;
