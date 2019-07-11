function loadCollegeChart() {
  google.charts.load('current', {packages: ['corechart', 'bar']});
  google.charts.setOnLoadCallback(collegeChart);

  function collegeChart() {
        var data = google.visualization.arrayToDataTable([
          ['Thema', 'Docenten', 'Studenten'],
          ['Zinnig', 100, 92.6],
          ['Veel inhalen als men college mist', 90, 43.1],
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

function loadTempoChart() {
  
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(tempoChart);

function tempoChart() {
      var data = google.visualization.arrayToDataTable([
        ['Thema', 'Docenten', 'Studenten'],
        ['Te Snel', 60, 40],
        ['Te langzaam', 0, 43.1],
        ['Gas terug nemen', 40, 0],
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