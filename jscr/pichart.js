google.load("visualization", "1", {packages:["corechart"]});
      google.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['seat id', 'number of reserved tickets'],
          ['odc', 23 ],
          ['balcony', 34],
          ['box',  45]
        ]);

        var options = {
          title: 'Reserved tickets',
          is3D: true
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


