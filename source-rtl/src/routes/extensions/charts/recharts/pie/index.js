import React from "react";
import { Card, Col, Row } from "antd";

import TwoLevelPieChart from "./Components/TwoLevelPieChart";
import StraightAnglePieChart from "./Components/StraightAnglePieChart";
import TwoSimplePieChart from "./Components/TwoSimplePieChart";
import CustomActiveShapePieChart from "./Components/CustomActiveShapePieChart";
import PieChartWithCustomizedLabel from "./Components/PieChartWithCustomizedLabel";
import PieChartWithPaddingAngle from "./Components/PieChartWithPaddingAngle";
import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";


const PieChart = ({ match }) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.pie" />} match={match} />

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار پای سطح دو">
            <TwoLevelPieChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار پای زاویه ای">
            <StraightAnglePieChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار فعال شکل شکل سفارشی">
            <CustomActiveShapePieChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار پای با برچسب سفارشی">
            <PieChartWithCustomizedLabel />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="دو نمودار پای ساده">
            <TwoSimplePieChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار پای با زاویه بالشتک">
            <PieChartWithPaddingAngle />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PieChart;
