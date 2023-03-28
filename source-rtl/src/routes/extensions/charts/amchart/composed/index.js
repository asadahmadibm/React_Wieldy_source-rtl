import React from "react";
import { Card, Col, Row } from "antd";

import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";
import DurationOnValueAxis from "./Components/DurationOnValueAxis";
import ReversedValueAxis from "./Components/ReversedValueAxis";
import PyramidChart from "./Components/PyramidChart";
import Funnel3DChart from "./Components/Funnel3DChart";
import FunnelChart from "./Components/FunnelChart";
import BubbleChart from "./Components/BubbleChart";
import XyChartWithDateBasedAxis from "./Components/XyChartWithDateBasedAxis";
import XYChartWithFillsToTheAxis from "./Components/XYChartWithFillsToTheAxis";
import XYChartWithValueBasedLineGraphs from "./Components/XYChartWithValueBasedLineGraphs";
import XYErrorChart from "./Components/XYErrorChart";
import ScatterChart from "./Components/ScatterChart";
import ZoomableBubbleChart from "./Components/ZoomableBubbleChart";
import AnimatedGauge from "./Components/AnimatedGauge";


const ComposedChart = ({ match }) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.bar" />} match={match} />

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="مدت زمان محور ارزش">
            <DurationOnValueAxis />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="محور ارزش معکوس">
            <ReversedValueAxis />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار داده های مشابه">
            <PyramidChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار قیف">
            <FunnelChart />
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار 3D قیف">
            <Funnel3DChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار 3D قیف">
            <BubbleChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار XY با محور مبتنی بر تاریخ">
            <XyChartWithDateBasedAxis />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار XY با تکمیل محور">
            <XYChartWithFillsToTheAxis />
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار حباب بزرگنمایی">
            <ZoomableBubbleChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار پراکندگی">
            <ScatterChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خطا XY">
            <XYErrorChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار XY با نمودارهای خط مبتنی بر ارزش">
            <XYChartWithValueBasedLineGraphs />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار XY با نمودارهای خط مبتنی بر ارزش">
            <AnimatedGauge />
          </Card>
        </Col>


      </Row>
    </div>
  );
};

export default ComposedChart;
