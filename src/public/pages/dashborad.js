/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Dashboard js
 */

!(function ($) {
  const Dashboard = function () {
  };

  // creates area chart
  Dashboard.prototype.createAreaChart = function (element, pointSize, lineWidth, data, xkey, ykeys, labels, lineColors) {
    Morris.Area({
      element,
      pointSize: 4,
      lineWidth: 2,
      data,
      xkey,
      ykeys,
      labels,
      resize: true,
      gridLineColor: '#eee',
      hideHover: 'auto',
      lineColors,
    });
  },
  // creates Bar chart
  Dashboard.prototype.createBarChart = function (element, data, xkey, ykeys, labels, lineColors) {
    Morris.Bar({
      element,
      data,
      xkey,
      ykeys,
      labels,
      gridLineColor: '#eee',
      barSizeRatio: 0.4,
      resize: true,
      hideHover: 'auto',
      barColors: lineColors,
    });
  },

  // creates Donut chart
  Dashboard.prototype.createDonutChart = function (element, data, colors) {
    Morris.Donut({
      element,
      data,
      resize: true,
      colors,
    });
  },

  Dashboard.prototype.init = function () {
    // creating area chart
    const $areaData = [
      { y: '2009', a: 10, b: 20 },
      { y: '2010', a: 75, b: 65 },
      { y: '2011', a: 50, b: 40 },
      { y: '2012', a: 75, b: 65 },
      { y: '2013', a: 50, b: 40 },
      { y: '2014', a: 75, b: 65 },
      { y: '2015', a: 90, b: 60 },
      { y: '2016', a: 90, b: 75 },
    ];
    this.createAreaChart('morris-area-example', 0, 0, $areaData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#337ab7', '#67a8e4']);

    // creating bar chart
    const $barData = [
      { y: '2009', a: 100, b: 90 },
      { y: '2010', a: 75, b: 65 },
      { y: '2011', a: 50, b: 40 },
      { y: '2012', a: 75, b: 65 },
      { y: '2013', a: 50, b: 40 },
      { y: '2014', a: 75, b: 65 },
      { y: '2015', a: 100, b: 90 },
      { y: '2016', a: 90, b: 75 },
    ];
    this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#337ab7', '#67a8e4']);

    // creating donut chart
    const $donutData = [
      { label: 'Bitcoin', value: 12 },
      { label: 'Ethereum', value: 42 },
      { label: 'Cardano', value: 20 },
    ];
    this.createDonutChart('morris-donut-example', $donutData, ['#f0f1f4', '#67a8e4', '#337ab7']);
  },
  // init
  $.Dashboard = new Dashboard(), $.Dashboard.Constructor = Dashboard;
}(window.jQuery)),

// initializing
(function ($) {
  $.Dashboard.init();
}(window.jQuery));
