import React from "react";
import { Card, Col, Row } from "antd";

import TinyBarChart from "./Components/TinyBarChart";
import StackedBarChart from "./Components/StackedBarChart";
import MixBarChart from "./Components/MixBarChart";
import CustomShapeBarChart from "./Components/CustomShapeBarChart";
import PositiveAndNegativeBarChart from "./Components/PositiveAndNegativeBarChart";
import BarChartStackedBySign from "./Components/BarChartStackedBySign";
import BiaxialBarChart from "./Components/BiaxialBarChart";
import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";

const BarChart = ({ match }) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.bar" />} match={match} />

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار نوار کوچک">
            <TinyBarChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار بارگذاری شده">
            <StackedBarChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار نوار را مخلوط کنید">
            <MixBarChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار نوار شکل سفارشی">
            <CustomShapeBarChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار بار مثبت و منفی">
            <PositiveAndNegativeBarChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار بارگذاری شده توسط علامت">
            <BarChartStackedBySign />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار نوار دو محوره">
            <BiaxialBarChart />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BarChart;
