// für canvas braucht man immer einen Kontext
let myChart = document.getElementById('myChart').getContext('2d');

// neues Objekt
let lineChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: [ '1.Jahr', '2.Jahr', '3.Jahr' ],
    datasets: [{
      label: 'Einnahmen',
      data: [
        1000,
        3000,
        2000
      ],
      backgroundColor: 'pink'
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Einnahmen in drei Jahren'
    }
  }
});
