# jquery reusable highchart plugin

## getting started

### include on page - old fashioned

Include jquery, highcharts, and jquery.reusable-highchart.js in your page before the closing body tag.

```html
<script src="jquery"></script>
<script src="highcharts"></script>
<script src="jquery.reusable-highchart.js"></script>
```

### include in app - module bundling

// TODO fill out documentation, convert to build system to minify/uglify and be available as module.

### define chart

Define a generic element styled and positioned the way you want, in your own css, with the class 'reusable-highchart' and a unique id. Use the data attributes options and data to define the highcharts options. Data represents the 'series' array in the typical Highcharts example and options is the rest of the initialization options.

```html
<div id="chart1" class="reusable-highchart" data-options='{"title":{"text":"Solar Employment Growth by Sector, 2010-2016"},"subtitle":{"text":"Source: thesolarfoundation.com"},"yAxis":{"title":{"text":"Number of Employees"}},"legend":{"layout":"vertical","align":"right","verticalAlign":"middle"},"plotOptions":{"series":{"label":{"connectorAllowed":false},"pointStart":2010}},"responsive":{"rules":[{"condition":{"maxWidth":500},"chartOptions":{"legend":{"layout":"horizontal","align":"center","verticalAlign":"bottom"}}}]}}'
    data-data='[{"name":"Installation","data":[43934,52503,57177,69658,97031,119931,137133,154175]},{"name":"Manufacturing","data":[24916,24064,29742,29851,32490,30282,38121,40434]},{"name":"Sales & Distribution","data":[11744,17722,16005,19771,20185,24377,32147,39387]},{"name":"Project Development","data":[null,null,7988,12169,15112,22452,34400,34227]},{"name":"Other","data":[12908,5948,8105,11248,8989,11816,18274,18111]}]'></div>
```

The plugin is designed to automatically render charts already defined on the page.

// TODO example and method to define and render a chart in JS.

## working with the reusableHighchart plugin

### get Highcharts object or objects

```javascript
var hcObject = $("#chart1")
  .resusableHighChart()
  .getChart();

// or

var hcObjects = $("reusable-highchart")
  .reusableHighchart()
  .getChart();
```

This method will return an array of Highcharts chart objects or a single Highchart chart object.

### update components with new data and/or options

```javascript
$("#chart1")
  .reusableHighchart()
  .updateChart(data, options);

// or

$("#chart1")
  .reusableHighchart()
  .updateChart(data);

// or

$("#chart1")
  .reusableHighchart()
  .updateChart();

// or

$("#chart1")
  .reusableHighchart()
  .updateChart();
```

The 'data' and 'options' parameters are optional. If you leave options empty, the chart will render with the previously defined options from the data-options attribute. If you leave both empty, the chart will reload.

### set options functions dynamically

It's not always the best idea to set executable javascript code as a stringified json object on a data attribute. If you need a callback defined use the...

// TODO define and wire up way for javascript functions to be redefined in the Highcharts options.
