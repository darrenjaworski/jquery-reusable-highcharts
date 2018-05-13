(function() {
  "use strict";
  $(document).ready(function() {
    var fakeAJAXOptions = {
      chart: {
        type: "line"
      },
      title: {
        text: "Monthly Average Temperature"
      },
      subtitle: {
        text: "Source: WorldClimate.com"
      },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ]
      },
      yAxis: {
        title: {
          text: "Temperature (°C)"
        }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      }
    };

    var fakeAJAXData = [
      {
        name: "Tokyo",
        data: [
          7.0,
          6.9,
          9.5,
          14.5,
          18.4,
          21.5,
          25.2,
          26.5,
          23.3,
          18.3,
          13.9,
          9.6
        ]
      },
      {
        name: "London",
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
      }
    ];

    $("#update").click(function(e) {
      e.preventDefault();
      var hcObject = $("#chart3")
        .reusableHighchart()
        .getChart();
      console.log(hcObject); // array of all the High chart objects

      // update #chart1 with new data and options
      $("#chart1")
        .reusableHighchart()
        .updateChart(fakeAJAXData, fakeAJAXOptions);

      // rerender #chart2
      $("#chart2").reusableHighchart("updateChart");
      // or
      // $("#chart2")
      //   .pcmHighChart()
      //   .updateChart();

      var formatter = {
        xAxis: {
          labels: {
            formatter: function() {
              return this.value; // clean, unformatted number for year
            }
          }
        },
        yAxis: {
          labels: {
            formatter: function() {
              return this.value / 1000 + "(thousand)";
            }
          }
        }
      };

      $("#chart4")
        .reusableHighchart()
        .defineCallback(formatter);
    });
  });
})();
