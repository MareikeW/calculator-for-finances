
const button = document.getElementById("submit-zins-button");

button.addEventListener("click", calc);
function calc() {
  const start = parseInt(document.getElementById('anfangskapital').value);
  const zins = parseInt(document.getElementById('zinssatz').value);
  const zeit = parseInt(document.getElementById('laufzeit').value);

  let ergebnis = start;
  let arrWerte = [start];
  let arrJahre = [0];

  for (var i = 1; i <= zeit; i++) {
    ergebnis = ergebnis * (1 + zins/ 100);
    arrWerte.push(ergebnis.toFixed(2));
    arrJahre.push(i);
  }

  document.getElementById('endkapital').innerHTML = ergebnis.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

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
        display: true,
        ticks: {
                  // Fügt ein €-Zeichen hinzu
                  callback: function(value) {
                        return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
                  }
              }
      }],
      xAxes: [{
          display: true,
          scaleLabel: {
                  display: true,
                  labelString: 'Jahre'
          }
      }]
    },
    title: {
      display: true,
      text: 'Mein Kapitalzuwachs'
    }
  }

  // für canvas braucht man immer einen Kontext
  var myChart = document.getElementById('chart-zinsrechner').getContext('2d');
    // neues Objekt
  new Chart(myChart, {
    type: 'scatter',
    data: chartData,
    options: chartOptions
  });

  var displayChart = document.querySelector('.chart-container');
  displayChart.style.visibility = 'visible';
}
