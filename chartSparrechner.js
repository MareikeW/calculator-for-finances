const button = document.getElementById("sparrechner-button");

button.addEventListener("click", calcSparrechner);

function calcSparrechner(event) {
  event.preventDefault();
  let anfangskapital = document.getElementById("anfangskapital").valueAsNumber;
  let sparrate = document.getElementById("sparrate").valueAsNumber;
  const sparintervall = document.getElementById("sparintervall");
  let zinssatz = document.getElementById("zinssatz").valueAsNumber;
  let ansparzeit = document.getElementById("ansparzeit").valueAsNumber;
  let endkapital = document.getElementById("endkapital");
  let jahresendkapital = 0;
  let monate = 12;
  let einzahlungenSumme = 0;
  let arrJahre = [0];
  let arrWerte = [anfangskapital];

  jahresendkapital += anfangskapital;
  if (sparintervall.value === "monatlich") {
        for (let i = 1; i <= ansparzeit; i++) {
          jahresendkapital += (jahresendkapital * zinssatz) / 100; // Jahresendkapital + Zinsen 
          jahresendkapital += sparrate * (monate + 6.5 * (zinssatz / 100));
          arrWerte.push(jahresendkapital.toFixed(2));
          arrJahre.push(i);
          console.log("Werte: " + arrWerte[i]);
          console.log("Jahre: " + arrJahre[i]);
        }   
        einzahlungenSumme = anfangskapital + ((sparrate * 12) * ansparzeit);
  } else if (sparintervall.value === "jährlich") {
        for (let i = 1; i <= ansparzeit; i++) {
          jahresendkapital = (((jahresendkapital + sparrate) * zinssatz) / 100) + sparrate + jahresendkapital;
          arrWerte.push(jahresendkapital.toFixed(2));
          arrJahre.push(i);
        }
        einzahlungenSumme = anfangskapital + (sparrate * ansparzeit);
  }

  endkapital.innerHTML = 
  `
    <p class="result-label-style">Einzahlungen gesamt: <span class="result-number-style">${einzahlungenSumme.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span></p>
    <p class="result-label-style">Zinsen gesamt: <span class="result-number-style">${(jahresendkapital - einzahlungenSumme).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span></p>
    <p class="result-label-style">Endkapital inkl. Zinsen: <span class="result-number-style">${jahresendkapital.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span></p>
  `;
  endkapital.style.display = "block";


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
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.yLabel.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
        }
      } 
    }
  }

  // für canvas braucht man immer einen Kontext
  var myChart = document.getElementById('chart-sparrechner').getContext('2d');
    // neues Objekt
  new Chart(myChart, {
    type: 'scatter',
    data: chartData,
    options: chartOptions
  });

  var displayChart = document.querySelector('.chart-container');
  displayChart.style.visibility = 'visible';
}  

  