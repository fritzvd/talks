    
    function loadChart () {
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
          ]);

          var options = {
            title: 'My Daily Activities'
          };

          var chart = new google.visualization.PieChart(document.getElementById('piechart'));

          chart.draw(data, options);
      }
    }
function loadCollegeChart() {///
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(collegeChart);

  function collegeChart() {
        var data = google.visualization.arrayToDataTable([
          ['Thema', 'Docenten', 'Studenten'],
          ['Zinnig', 100, 92.6],
          ['Mis veel', 90, 43.1],
          ['Leert klassikaal veel', 94.4, 73.7],
          ['Schrijft mee', 30, 46],
          ['Leert van opdrachten', 100, 89.7]
        ]);

        var options = {
          title: 'Overzicht college vragen',
          chartArea: {width: '50%'},
          hAxis: {
            title: 'Percentage eens',
            minValue: 0,
            textStyle: {
              bold: true,
              fontSize: 12,
              color: '#4d4d4d'
            },
            titleTextStyle: {
              bold: true,
              fontSize: 18,
              color: '#4d4d4d'
            }
          }
        };
        var chart = new google.visualization.BarChart(document.getElementById('college-chart'));
        chart.draw(data, options);
      }
}

function loadTempoChart() {///
  
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(tempoChart);

function tempoChart() {
      var data = google.visualization.arrayToDataTable([
        ['Thema', 'Docenten', 'Studenten'],
        ['Te Snel', 60, 40],
        ['Te langzaam', 61, 43.1]
      ]);

      var options = {
        title: 'Overzicht college vragen',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Percentage eens',
          minValue: 0,
          textStyle: {
            bold: true,
            fontSize: 12,
            color: '#4d4d4d'
          },
          titleTextStyle: {
            bold: true,
            fontSize: 18,
            color: '#4d4d4d'
          }
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('tempo-chart'));
      chart.draw(data, options);
    }
  }