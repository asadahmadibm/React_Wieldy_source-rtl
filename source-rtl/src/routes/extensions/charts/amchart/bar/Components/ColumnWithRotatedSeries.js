import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const ColumnWithRotatedSeries = () => {

  const config = {
    "type": "serial",
    "theme": "light",
    "marginRight": 70,
    "dataProvider": [{
      "country": "ایالات متحده",
      "visits": 3025,
      "color": "#FF0F00"
    }, {
      "country": "چین",
      "visits": 1882,
      "color": "#FF6600"
    }, {
      "country": "ژاپن",
      "visits": 1809,
      "color": "#FF9E01"
    }, {
      "country": "آلمان",
      "visits": 1322,
      "color": "#FCD202"
    }, {
      "country": "انگلستان",
      "visits": 1122,
      "color": "#F8FF01"
    }, {
      "country": "فرانسه",
      "visits": 1114,
      "color": "#B0DE09"
    }, {
      "country": "هند",
      "visits": 984,
      "color": "#04D215"
    }, {
      "country": "Spain",
      "visits": 711,
      "color": "#0D8ECF"
    }, {
      "country": "نیوزلند",
      "visits": 665,
      "color": "#0D52D1"
    }, {
      "country": "روسیه",
      "visits": 580,
      "color": "#2A0CD0"
    }, {
      "country": "کره جنوبی",
      "visits": 443,
      "color": "#8A0CCF"
    }, {
      "country": "کانادا",
      "visits": 441,
      "color": "#CD0D74"
    }],
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left",
      "title": "Visitors from country"
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "<b>[[category]]: [[value]]</b>",
      "fillColorsField": "color",
      "fillAlphas": 0.9,
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
      "labelRotation": 45
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

export default ColumnWithRotatedSeries;
