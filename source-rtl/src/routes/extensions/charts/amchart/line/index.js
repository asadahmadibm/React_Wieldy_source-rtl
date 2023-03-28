import React from "react";
import { Card, Col, Row } from "antd";

import DateBasedLine from "./Components/DateBasedLine";

import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";
import LineChartWithScrollAndZoom from "./Components/LineChartWithScrollAndZoom";
import LineWithDifferentColors from "./Components/LineWithDifferentColors";
import SmoothedLineChart from "./Components/SmoothedLineChart";
import TrendLines from "./Components/TrendLines";
import LineWithChangingColor from "../area/Components/LineWithChangingColor";
import FillBetweenTwoLines from "./Components/FillBetweenTwoLines";
import StepLineChart from "./Components/StepLineChart";
import LineWithCustomBullets from "./Components/LineWithCustomBullets";
import VerticalLineChart from "./Components/VerticalLineChart";
import ChartWithGapsInData from "./Components/ChartWithGapsInData";
import MultipleValueAxes from "./Components/MultipleValueAxes";
import LogarithmicScale from "./Components/LogarithmicScale";
import LineWithDifferentNegativeColor from "./Components/LineWithDifferentNegativeColor";


const LineChart = ({ match }) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.line" />} match={match} />

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط مبتنی بر تاریخ">
            <DateBasedLine />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط با پیمایش و زوم">
            <LineChartWithScrollAndZoom />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="خط با رنگ های مختلف">
            <LineWithDifferentColors />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="بین دو خط پر کنید">
            <FillBetweenTwoLines />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط صاف">
            <SmoothedLineChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="خط با تغییر رنگ">
            <LineWithChangingColor />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خطوط روند">
            <TrendLines />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط مرحله">
            <StepLineChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="خط با گلوله های سفارشی">
            <LineWithCustomBullets />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط عمودی">
            <VerticalLineChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار با شکاف در داده ها">
            <ChartWithGapsInData />
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="چند محور ارزش">
            <MultipleValueAxes />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="مقیاس لگاریتمی">
            <LogarithmicScale />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="خط با رنگ منفی متفاوت">
            <LineWithDifferentNegativeColor />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LineChart;
