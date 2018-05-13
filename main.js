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

    var chartOptions = {
      chart: {
        type: "area"
      },
      title: {
        text: "Area chart with negative values"
      },
      xAxis: {
        categories: ["Apples", "Oranges", "Pears", "Grapes", "Bananas"]
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: "John",
          data: [5, 3, 4, 7, 2]
        },
        {
          name: "Jane",
          data: [2, -2, -3, 2, 1]
        },
        {
          name: "Joe",
          data: [3, 4, 4, -2, 5]
        }
      ]
    };

    $("#chart5").reusableHighchart(chartOptions);

    $("#update").click(function(e) {
      e.preventDefault();

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

      var hcObject = $("#chart3").reusableHighchart("getChart");
      console.log(hcObject); // array of all the High chart objects

      var optionOverrides = {
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
        },
        series: [
          {
            name: "USA",
            data: [
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              null,
              5,
              25,
              50,
              120,
              150,
              200,
              426,
              660,
              869,
              1060,
              1605,
              2471,
              3322,
              4238,
              5221,
              6129,
              7089,
              8339,
              9399,
              10538,
              11643,
              13092,
              14478,
              15915,
              17385,
              19055,
              21205,
              23044,
              25393,
              27935,
              30062,
              32049,
              33952,
              35804,
              37431,
              39197,
              45000,
              43000,
              41000,
              39000,
              37000,
              35000,
              33000,
              31000,
              29000,
              27000,
              25000,
              24000,
              23000,
              22000,
              21000,
              20000,
              19000,
              18000,
              18000,
              17000,
              16000,
              15537,
              14162,
              12787,
              12600,
              11400,
              5500,
              4512,
              4502,
              4502,
              4500,
              4500
            ]
          },
          {
            name: "USSR/Russia",
            data: [
              null,
              null,
              null,
              null,
              null,
              6,
              11,
              32,
              110,
              235,
              369,
              640,
              1005,
              1436,
              2063,
              3057,
              4618,
              6444,
              9822,
              15468,
              20434,
              24126,
              27387,
              29459,
              31056,
              31982,
              32040,
              31233,
              29224,
              27342,
              26662,
              26956,
              27912,
              28999,
              28965,
              27826,
              25579,
              25722,
              24826,
              24605,
              24304,
              23464,
              23708,
              24099,
              24357,
              24237,
              24401,
              24344,
              23586,
              22380,
              21004,
              17287,
              14747,
              13076,
              12555,
              12144,
              11009,
              10950,
              10871,
              10824,
              10577,
              10527,
              10475,
              10421,
              10358,
              10295,
              10104,
              9914,
              9620,
              9326,
              5113,
              5113,
              4954,
              4804,
              4761,
              4717,
              4368,
              4018
            ]
          }
        ]
      };

      $("#chart4").reusableHighchart(optionOverrides);
      // or
      // $('#chart4).reusableHighchart().defineOptions(optionsOverrides);
    });
  });
})();
