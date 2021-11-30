google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['DDD', 'Hours per Day'],
    ['PE (81)',     11],
    ['PB (83)',      2],
    ['CE (85)',  2],
    ['Outros', 2],
  ]);

  var options = {
    title: 'DDD',
    colors:['#f26f42','purple','#d33952','#ED8975']
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

  chart.draw(data, options);
}