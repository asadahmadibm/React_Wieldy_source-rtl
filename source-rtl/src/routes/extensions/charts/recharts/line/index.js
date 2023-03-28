import React from "react";
import { Card, Col, Row } from "antd";

import SimpleLineChart from "./Components/SimpleLineChart";
import VerticalLineChart from "./Components/VerticalLineChart";
import CustomizedDotLineChart from "./Components/CustomizedDotLineChart";
import LineChartWithReferenceLines from "./Components/LineChartWithReferenceLines";
import DashedLineChart from "./Components/DashedLineChart";
import LineChartWithXAxisPading from "./Components/LineChartWithXAxisPading";
import LineChartConnectNulls from "./Components/LineChartConnectNulls";
import SynchronizedLineChart from "./Components/SynchronizedLineChart";
import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";

const LineChart = ({ match }) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.line" />} match={match} />

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط ساده">
            <SimpleLineChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط عمودی">
            <VerticalLineChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط سفارشی">
            <CustomizedDotLineChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط با خطوط مرجع">
            <LineChartWithReferenceLines />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط خراب">
            <DashedLineChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط با بالشتک X-Axis">
            <LineChartWithXAxisPading />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خطی هماهنگ">
            <SynchronizedLineChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار خط اتصال Nulls">
            <LineChartConnectNulls />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LineChart;
