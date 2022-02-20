/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Float Js
 */

!(function ($) {
  const FlotChart = function () {
    this.$body = $('body');
    this.$realData = [];
  };

  // creates plot graph
  FlotChart.prototype.createPlotGraph = function (selector, data1, data2, labels, colors, borderColor, bgColor) {
    // shows tooltip
    function showTooltip(x, y, contents) {
      $(`<div id="tooltip" class="tooltipflot">${contents}</div>`).css({
        position: 'absolute',
        top: y + 5,
        left: x + 5,
      }).appendTo('body').fadeIn(200);
    }

    $.plot($(selector),
      [{
        data: data1,
        label: labels[0],
        color: colors[0],
      },
      {
        data: data2,
        label: labels[1],
        color: colors[1],
      },
      ],
      {
        series: {
          lines: {
            show: true,
            fill: true,
            lineWidth: 2,
            fillColor: {
              colors: [{ opacity: 0.5 },
                { opacity: 0.5 },
              ],
            },
          },
          points: {
            show: false,
          },
          shadowSize: 0,
        },
        legend: {
          position: 'nw',
        },
        grid: {
          hoverable: true,
          clickable: true,
          borderColor,
          borderWidth: 1,
          labelMargin: 10,
          backgroundColor: bgColor,
        },
        yaxis: {
          min: 0,
          max: 15,
          color: 'rgba(0,0,0,0.1)',
        },
        xaxis: {
          color: 'rgba(0,0,0,0.1)',
        },
        tooltip: true,
        tooltipOpts: {
          content: '%s: Value of %x is %y',
          shifts: {
            x: -60,
            y: 25,
          },
          defaultTheme: false,
        },
      });
  },
  // end plot graph

  // creates Pie Chart
  FlotChart.prototype.createPieGraph = function (selector, labels, datas, colors) {
    const data = [{
      label: labels[0],
      data: datas[0],
    }, {
      label: labels[1],
      data: datas[1],
    }, {
      label: labels[2],
      data: datas[2],
    }];
    const options = {
      series: {
        pie: {
          show: true,
        },
      },
      legend: {
        show: true,
      },
      grid: {
        hoverable: true,
        clickable: true,
      },
      colors,
      tooltip: true,
      tooltipOpts: {
        content: '%s, %p.0%',
      },
    };

    $.plot($(selector), data, options);
  },

  // returns some random data
  FlotChart.prototype.randomData = function () {
    const totalPoints = 300;
    if (this.$realData.length > 0) this.$realData = this.$realData.slice(1);

    // Do a random walk
    while (this.$realData.length < totalPoints) {
      const prev = this.$realData.length > 0 ? this.$realData[this.$realData.length - 1] : 50;
      let y = prev + Math.random() * 10 - 5;

      if (y < 0) {
        y = 0;
      } else if (y > 100) {
        y = 100;
      }

      this.$realData.push(y);
    }

    // Zip the generated y values with the x values
    const res = [];
    for (let i = 0; i < this.$realData.length; ++i) {
      res.push([i, this.$realData[i]]);
    }

    return res;
  },

  FlotChart.prototype.createRealTimeGraph = function (selector, data, colors) {
    const plot = $.plot(selector, [data], {
      colors,
      series: {
        lines: {
          show: true,
          fill: true,
          lineWidth: 2,
          fillColor: {
            colors: [{
              opacity: 0.45,
            }, {
              opacity: 0.45,
            }],
          },
        },
        points: {
          show: false,
        },
        shadowSize: 0,
      },
      grid: {
        show: true,
        aboveData: false,
        color: '#dcdcdc',
        labelMargin: 15,
        axisMargin: 0,
        borderWidth: 0,
        borderColor: null,
        minBorderMargin: 5,
        clickable: true,
        hoverable: true,
        autoHighlight: false,
        mouseActiveRadius: 20,
      },
      tooltip: true, // activate tooltip
      tooltipOpts: {
        content: 'Value is : %y.0' + '%',
        shifts: {
          x: -30,
          y: -50,
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        color: 'rgba(0,0,0,0.1)',
      },
      xaxis: {
        show: false,
      },
    });

    return plot;
  },
  // creates Pie Chart
  FlotChart.prototype.createDonutGraph = function (selector, labels, datas, colors) {
    const data = [{
      label: labels[0],
      data: datas[0],
    }, {
      label: labels[1],
      data: datas[1],
    }, {
      label: labels[2],
      data: datas[2],
    },
    {
      label: labels[3],
      data: datas[3],
    }, {
      label: labels[4],
      data: datas[4],
    },
    ];
    const options = {
      series: {
        pie: {
          show: true,
          innerRadius: 0.7,
        },
      },
      legend: {
        show: true,
        labelFormatter(label, series) {
          return `<div style="font-size:14px;">&nbsp;${label}</div>`;
        },
        labelBoxBorderColor: null,
        margin: 50,
        width: 20,
        padding: 1,
      },
      grid: {
        hoverable: true,
        clickable: true,
      },
      colors,
      tooltip: true,
      tooltipOpts: {
        content: '%s, %p.0%',
      },
    };

    $.plot($(selector), data, options);
  },

  // initializing various charts and components
  FlotChart.prototype.init = function () {
    // plot graph data
    const uploads = [[0, 9], [1, 8], [2, 5], [3, 8], [4, 5], [5, 14], [6, 10]];
    const downloads = [[0, 5], [1, 12], [2, 4], [3, 3], [4, 12], [5, 8], [6, 4]];
    const plabels = ['Wrapbootstrap', 'Other Market'];
    const pcolors = ['#ebeff2', '#67a8e4'];
    const borderColor = '#f5f5f5';
    const bgColor = '#fff';
    this.createPlotGraph('#website-stats', uploads, downloads, plabels, pcolors, borderColor, bgColor);

    // Pie graph data
    const pielabels = ['Wrapbootstrap', 'Other Market', 'Direct Sales'];
    const datas = [20, 30, 15];
    const colors = ['#337ab7', '#67a8e4', '#f0f1f4'];
    this.createPieGraph('#pie-chart #pie-chart-container', pielabels, datas, colors);

    // real time data representation
    const plot = this.createRealTimeGraph('#flotRealTime', this.randomData(), ['#67a8e4']);
    plot.draw();
    const $this = this;
    function updatePlot() {
      plot.setData([$this.randomData()]);
      // Since the axes don't change, we don't need to call plot.setupGrid()
      plot.draw();
      setTimeout(updatePlot, $('html').hasClass('mobile-device') ? 1000 : 1000);
    }
    updatePlot();

    // Donut pie graph data
    const donutlabels = ['Wrapbootstrap', 'Other Market', 'Direct Sales'];
    const donutdatas = [29, 20, 18];
    const donutcolors = ['#337ab7', '#67a8e4', '#f0f1f4'];
    this.createDonutGraph('#donut-chart #donut-chart-container', donutlabels, donutdatas, donutcolors);
  },

  // init flotchart
  $.FlotChart = new FlotChart(), $.FlotChart.Constructor = FlotChart;
}(window.jQuery)),

// initializing flotchart
(function ($) {
  $.FlotChart.init();
}(window.jQuery));
