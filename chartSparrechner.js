function fillChartSparrechner() {
  let anfangskapital = document.getElementById("anfangskapital").valueAsNumber;
  let sparrate = document.getElementById("sparrate").valueAsNumber;
  const sparintervall = document.getElementById("sparintervall");
  let zinssatz = document.getElementById("zinssatz").valueAsNumber;
  let ansparzeit = document.getElementById("ansparzeit").valueAsNumber;
  let endkapital = document.getElementById("endkapital"); 

  let jahresendkapital = 0;
  jahresendkapital += anfangskapital;

  if (sparintervall.value === "monatlich") {
      berechneMonatlich();
  } else if (sparintervall.value === "jährlich") {
      berechneJährlich();
  }

  function berechneMonatlich() {
    for (let i = 0; i < ansparzeit; i++) {
      jahresendkapital += (jahresendkapital * zinssatz) / 100;
  
      jahresendkapital += sparrate * (12 + 6.5 * (zinssatz / 100));
    }
    endkapital.innerHTML = jahresendkapital.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
  }

  function berechneJährlich() {
    for (let i = 1; i <= ansparzeit; i++) {
      jahresendkapital = (((jahresendkapital + sparrate) * zinssatz) / 100) + sparrate + jahresendkapital;
    }
    endkapital.innerHTML = jahresendkapital.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
  }
  
  
}


/*function fillChartInvestitionsRechner() {
   let jahresEndkapital = 0;
   let arrJahresEndkapital = [jahresEndkapital];
   let arrJahre = [0];

    // Alle Werte werden als Strings ausgegeben und müssen in Zahlen umgewandelt werden
   jahresEndkapital += start;
   einzahlungen = 12 * sparrate;
   zinssatz = 1 + zinssatz / 100;
   console.log(jahresEndkapital)
   

    var chartData = {
        datasets: [{
          label: 'Jahresendkapital',
          data: [],
          showLine: true
        }]
      }

      // fügt Daten hinzu
      for (var i = 1; i < arrJahre.length; i++) {
        chartData.datasets[0].data.push(
          {
            x: arrJahre[i],
            y: arrJahresEndkapital[i]
          }
        )
      }

    var chartOptions = {
        responsive: true,
        scales: {
            yAxes: [{
              display: true,
              ticks: {
                        // Fügt ein €-Zeichen hinzu
                        callback: function(value) {
                              return value + ' €';
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
    };

    var myChart = document.getElementById('chart-sparrechner').getContext('2d');

    new Chart(myChart, {
        type: 'scatter',
        data: chartData,
        options: chartOptions
    });

    var displayChart = document.querySelector('.chart-container');
    displayChart.style.visibility = 'visible';
}

*/