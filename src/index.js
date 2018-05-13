/**
 * jquery reusableHighchart plugin
 * author - Darren Jaworski <darrenjaworski@gmail.com>
 */

import $ from "jquery";

(function($) {
  "use strict";

  $.fn.reusableHighchart = function(param) {
    var self = this;
    this.customOptions = {};

    this.getChart = function() {
      var charts = self.map(function() {
        var $el = $(this);
        var id = $el.prop("id");
        return $("#" + id).highcharts();
      });

      if (charts.length > 1) return charts;
      return charts[0];
    };

    this.updateChart = function() {
      var args = arguments;
      self.each(function() {
        if (args) {
          var $el = $(this).data("data", args[0]);

          if (args.length > 1) {
            $el.data("options", args[1]);
          }
        }

        render.bind(this)();
        return;
      });
    };

    this.defineOptions = function(option) {
      self.customOptions = $.extend(self.customOptions, option);
      self.each(function() {
        render.bind(this)();
        return;
      });
    };

    function render() {
      var $el = $(this);
      var id = $el.prop("id");
      var options = $el.data("options") ? $el.data("options") : {};
      options = $.extend(options, self.customOptions);

      if (!options) {
        console.warn(
          "Options are not defined on the data-options attribute for the chart #" +
            id +
            "."
        );
        return this;
      }

      if (!options.series) {
        options.series = [];
        var data = $el.data("data");
        if (data && Array.isArray(data)) {
          options.series = data;
        } else {
          console.warn(
            "Your data is undefined or not an array for the chart #" + id + "."
          );
        }
      }

      $el.highcharts(options);
      return this;
    }

    var methods = { getChart: self.getChart, updateChart: self.updateChart };

    if (param) {
      if (methods.hasOwnProperty(param)) {
        return methods[param]();
      } else {
        this.defineOptions(param);
        return;
      }
    }

    return this.each(render);
  };

  $(document).ready(function() {
    $(".reusable-highchart").reusableHighchart();
  });
})(jQuery);
