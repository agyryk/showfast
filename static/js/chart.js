/*jshint jquery: true, browser: true*/
/*global d3: true, nv: true*/

var SHOWFAST = SHOWFAST || {};

SHOWFAST.addChart = function(id, data) {
    "use strict";

    nv.addGraph(function() {
        var chart = nv.models.discreteBarChart()
            .x(function(d) { return d[0]; })
            .y(function(d) { return d[1]; })
            .showValues(true)
            .color(["#50aa43"]);

        chart.valueFormat(d3.format('f'));
        chart.yAxis.tickFormat(d3.format('f'));

        if (data[0].values.length > 15) {
            chart.xAxis.rotateLabels(-45);
        }

        d3.select("#" + id + " svg")
            .datum(data)
            .call(chart);

        return chart;
    });
};