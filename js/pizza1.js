google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Sistema Operacional', 'Hours per Day'],
    ['PC',     11],
    ['iOS',      2],
    ['Android',  2],
    ['Outros', 2],
  ]);

  var options = {
    title: 'Sistema Operacional',
    colors:['#f26f42','purple','#d33952','#ED8975']
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart1'));

  chart.draw(data, options);
}