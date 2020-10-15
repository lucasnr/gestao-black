(function () {
  function getData({ labels, data }) {
    return {
      labels,
      datasets: [
        {
          label: 'Data',
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#d048b6',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#d048b6',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data,
        },
      ],
    };
  }

  function getDataAnual() {
    return getData({
      labels: [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC',
      ],
      data: [20, 90, 50, 35, 90, 30, 80, 100, 70, 80, 120, 80],
    });
  }

  function getDataMensal() {
    return getData({
      labels: [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      data: [
        10,
        15,
        30,
        25,
        40,
        50,
        70,
        90,
        45,
        25,
        20,
        20,
        35,
        55,
        30,
        50,
        80,
        100,
        120,
        115,
        100,
        90,
        55,
        100,
        120,
        95,
        55,
        45,
        65,
        95,
      ],
    });
  }

  function getDataSemanal() {
    return getData({
      labels: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sabádo',
      ],
      data: [45, 55, 35, 85, 65, 80, 120],
    });
  }

  var gradientChartOptionsConfigurationWithTooltipPurple = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },

    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: '#9a9a9a',
          },
        },
      ],

      xAxes: [
        {
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9a9a9a',
          },
        },
      ],
    },
  };

  var ctx = document.getElementById('chartLinePurple').getContext('2d');

  var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, 'rgba(72,72,176,0.2)');
  gradientStroke.addColorStop(0.2, 'rgba(72,72,176,0.0)');
  gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

  var lineChart = new Chart(ctx, {
    type: 'line',
    data: getDataAnual(),
    options: gradientChartOptionsConfigurationWithTooltipPurple,
  });

  $('.content input[name="period"]').change((event) => {
    var value = $(event.target).val();
    if (value === 'anual') lineChart.data = getDataAnual();
    else if (value === 'mensal') lineChart.data = getDataMensal();
    else if (value === 'semanal') lineChart.data = getDataSemanal();

    lineChart.update();
  });
})();
