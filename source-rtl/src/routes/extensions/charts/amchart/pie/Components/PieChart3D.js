import React from "react";
import AmCharts from "@amcharts/amcharts3-react";

const PieChart3D = () => {

  const config = {
    "type": "pie",
    "theme": "light",
    "dataProvider": [{
      "country": "Lithuania",
      "value": 260
    }, {
      "country": "ایرلند",
      "value": 201
    }, {
      "country": "آلمان",
      "value": 65
    }, {
      "country": "استرالیا",
      "value": 39
    }, {
      "country": "انگلستان",
      "value": 19
    }, {
      "country": "Latvia",
      "value": 10
    }],
    "valueField": "value",
    "titleField": "country",
    "outlineAlpha": 0.4,
    "depth3D": 15,
    "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
    "angle": 30,
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

export default PieChart3D;
