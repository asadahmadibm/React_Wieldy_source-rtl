import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const LayeredColumnChart = () => {

  const config = {
    "theme": "light",
    "type": "serial",
    "dataProvider": [{
      "country": "ایالات متحده",
      "year2004": 3.5,
      "year2005": 4.2
    }, {
      "country": "انگلستان",
      "year2004": 1.7,
      "year2005": 3.1
    }, {
      "country": "کانادا",
      "year2004": 2.8,
      "year2005": 2.9
    }, {
      "country": "ژاپن",
      "year2004": 2.6,
      "year2005": 2.3
    }, {
      "country": "فرانسه",
      "year2004": 1.4,
      "year2005": 2.1
    }, {
      "country": "برزیل",
      "year2004": 2.6,
      "year2005": 4.9
    }],
    "valueAxes": [{
      "unit": "%",
      "position": "left",
      "title": "GDP growth rate",
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "GDP grow in [[category]] (2004): <b>[[value]]</b>",
      "fillAlphas": 0.9,
      "lineAlpha": 0.2,
      "title": "2004",
      "type": "column",
      "valueField": "year2004"
    }, {
      "balloonText": "GDP grow in [[category]] (2005): <b>[[value]]</b>",
      "fillAlphas": 0.9,
      "lineAlpha": 0.2,
      "title": "2005",
      "type": "column",
      "clustered": false,
      "columnWidth": 0.5,
      "valueField": "year2005"
    }],
    "plotAreaFillAlphas": 0.1,
    "categoryField": "country",
    "categoryAxis": {
      "gridPosition": "start"
    },
    "export": {
      "enabled": true
    }

  };
  return (
    <div className="App">
      <AmCharts.React style={{width: "100%", height: "500px"}} options={config}/>
    </div>
  )
}

export default LayeredColumnChart;
