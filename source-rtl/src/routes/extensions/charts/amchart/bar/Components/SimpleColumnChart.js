import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const SimpleColumnChart = () => {

  const config = {
    "type": "serial",
    "theme": "light",
    "dataProvider": [{
      "country": "ایالات متحده",
      "visits": 2025
    }, {
      "country": "چین",
      "visits": 1882
    }, {
      "country": "ژاپن",
      "visits": 1809
    }, {
      "country": "آلمان",
      "visits": 1322
    }, {
      "country": "انگلستان",
      "visits": 1122
    }, {
      "country": "فرانسه",
      "visits": 1114
    }, {
      "country": "هند",
      "visits": 984
    }, {
      "country": "Spain",
      "visits": 711
    }, {
      "country": "نیوزلند",
      "visits": 665
    }, {
      "country": "روسیه",
      "visits": 580
    }, {
      "country": "کره جنوبی",
      "visits": 443
    }, {
      "country": "کانادا",
      "visits": 441
    }, {
      "country": "برزیل",
      "visits": 395
    }],
    "valueAxes": [{
      "gridColor": "#FFFFFF",
      "gridAlpha": 0.2,
      "dashLength": 0
    }],
    "gridAboveGraphs": true,
    "startDuration": 1,
    "graphs": [{
      "balloonText": "[[category]]: <b>[[value]]</b>",
      "fillAlphas": 0.8,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "visits"
    }],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
      "gridPosition": "start",
      "gridAlpha": 0,
      "tickPosition": "start",
      "tickLength": 20
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

export default SimpleColumnChart;
