google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Mês', '',],
    ['Janeiro', 15],
    ['Fevereiro', 25],
    ['Março', 30],
    ['Abril', 18],
    ['Maio', 20],
    ['Junho', 23],
    ['Julho', 28],
    
  ]);

  var options = {
    chart: {
      title: 'Aniversariante por Mês'
    },
    bars: 'horizontal',
    colors: ['#f26f42','#b8b8b8']
    
    // Required for Material Bar Charts.
  };

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}