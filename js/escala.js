google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Mês', 'visualizações'],
          ['01/12',  650,],
          ['02/12',  800,],
          ['03/12',  1200,],
          ['04/12',  1300,],
          ['05/12',  1000,],
          ['06/12',  600,],
          ['07/12',  540,],
          ['08/12',  720],
        ]);

        var options = {
          title: 'Visualizações',
          curveType: 'function',
          legend: { position: 'bottom' },
          colors:['#f26f42']
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);}