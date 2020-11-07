function fillChartSparrechner() {
   let start = document.getElementById("anfangskapital").value;
   let sparrate = document.getElementById("sparrate").value;
   let sparintervall = document.getElementById("sparintervall".value);
   let zinssatz = document.getElementById("zinssatz").value;
   let ansparzeit = document.getElementById("ansparzeit").value;
   let endkapital = document.getElementById("endkapital");
   let jahresEndkapital = 0;
   let arrJahresEndkapital = [jahresEndkapital];
   let arrJahre = [0];

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
        arrJahresEndkapital.push(jahresEndkapital.toFixed(2));
        arrJahre.push(i);
    }
    // Gibt Ergebnis in Ergebnisfeld aus
    endkapital.innerHTML = jahresEndkapital.toFixed(2);
   

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