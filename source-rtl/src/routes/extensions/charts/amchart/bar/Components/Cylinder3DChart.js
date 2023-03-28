import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const Cylinder3DChart = () => {

  const config = {
    "theme": "light",
    "type": "serial",
    "startDuration": 2,
    "dataProvider": [{
      "country": "ایالات متحده",
      "visits": 4025,
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
    }, {
      "country": "برزیل",
      "visits": 395,
      "color": "#754DEB"
    }, {
      "country": "ایتالیا",
      "visits": 386,
      "color": "#DDDDDD"
    }, {
      "country": "تایوان",
      "visits": 338,
      "color": "#333333"
    }],
    "valueAxes": [{
      "position": "left",
      "axisAlpha": 0,
      "gridAlpha": 0
    }],
    "graphs": [{
      "balloonText": "[[category]]: <b>[[value]]</b>",
      "colorField": "color",
      "fillAlphas": 0.85,
      "lineAlpha": 0.1,
      "type": "column",
      "topRadius": 1,
      "valueField": "visits"
    }],
    "depth3D": 40,
    "angle": 30,
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
      "gridPosition": "start",
      "axisAlpha": 0,
      "gridAlpha": 0

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

export default Cylinder3DChart;
