
function calc() {
  var start = parseInt(document.getElementById('anfangskapital').value);
  var zins = parseInt(document.getElementById('zinssatz').value);
  var zeit = parseInt(document.getElementById('laufzeit').value);

  var ergebnis = start;
  var arrWerte = [start];
  var arrJahre = [0];

  for (var i = 1; i <= zeit; i++) {
    ergebnis = ergebnis * (1 + zins/ 100);
    arrWerte.push(ergebnis);
    arrJahre.push(i);

    //return arrWerte;
  }
  //addData();


  document.getElementById('endkapital').innerHTML = ergebnis.toFixed(2); // zwei Nachkommastellen
  //addData(lineChart, arrJahre, arrWerte);

  //function addData() {
    //  myChart.data.labels.push(5);
    //  myChart.update();
//  }
// Graph


// für canvas braucht man immer einen Kontext
var myChart = document.getElementById('myChart').getContext('2d');
// neues Objekt
var lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: ["Anfang", "Hallo"],
    datasets: [{
      label: 'Kapital',
      data: [1,2,3,4,5],
      borderColor: 'pink',
      fill: true
    }]
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        display: true,
        ticks: {
                    beginAtZero:true
                }
      }]
    },
    title: {
      display: true,
      text: 'Mein Kapitalzuwachs'
    }
  }
});
}
