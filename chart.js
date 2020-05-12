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
  var start = document.getElementById('anfangskapital').value;
  var zins = document.getElementById('zinssatz').value;
  var zeit = document.getElementById('laufzeit').value;


  //berechneEndkapital(start, zins, laufzeit);

  var ergebnis = start + 1;

  document.getElementById('endkapital').innerHTML = ergebnis;

  return false;
}

//function  berechneEndkapital({ start, zins, laufzeit }) {
    //var i = 0;

  //  while (i < laufzeit) {
  //    var ergebnis += start * (1 + (zins/100));
  //    i++;
  //  }
  //  return ergebnis;

  }
