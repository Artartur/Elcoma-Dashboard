google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Gênero', 'Hours per Day'],
    ['Masculino',     11],
    ['Feminino',      2],
    ['Não informado',  2],
    ['Outros', 2],
  ]);

  var options = {
    title: 'Gênero',
    colors:['#f26f42','#ED8975','purple','#d33952']
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
// grafico 1
