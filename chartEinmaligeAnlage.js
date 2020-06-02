function calc() {
  var start = parseInt(document.getElementById('anfangskapital').value);
  var zins = parseInt(document.getElementById('zinssatz').value);
  var zeit = parseInt(document.getElementById('laufzeit').value);

  var ergebnis = start;
  var arrWerte = [start];
  var arrJahre = [0];

  for (var i = 1; i <= zeit; i++) {
    ergebnis = ergebnis * (1 + zins/ 100);
    arrWerte.push(ergebnis.toFixed(2));
    arrJahre.push(i);
    //console.log(arrJahre);
  }

  document.getElementById('endkapital').innerHTML = ergebnis.toFixed(2); // zwei Nachkommastellen

  var chartData = {
  datasets: [{
    label: 'Kapital',
    data: [],
    showLine: true
  }]
  }

  //addData();
  for (var i = 0; i < arrJahre.length; i++) {
    chartData.datasets[0].data.push(
      {
        x: arrJahre[i],
        y: arrWerte[i]
      }
    )
  }

  // Graph
  var chartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        display: true
      }],
      xAxes: [{
          display: true
      }]
    },
    title: {
      display: true,
      text: 'Mein Kapitalzuwachs'
    }
  }

  // für canvas braucht man immer einen Kontext
  var myChart = document.getElementById('myChart').getContext('2d');
    // neues Objekt
  var lineChart = new Chart(myChart, {
  type: 'scatter',
  data: chartData,
  options: chartOptions
  });
}
