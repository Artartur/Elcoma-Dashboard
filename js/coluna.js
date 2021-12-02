google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Idade', 'M', 'F'],
          ['0 a 14', 10, 14],
          ['15 a 31', 17, 25],
          ['40 a 60', 40, 25],
          ['61 +', 30, 20]
        ]);

        var options = {
          chart: {
            title: 'Faixa etária',
          },
          colors:['#f26f42','#ED8975']
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }