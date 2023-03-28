import React from "react";
import { Card, Col, Row } from "antd";
import DonutChart from "./Components/DonutChart";
import DonutChart3D from "./Components/DonutChart3D";
import DonutWithRadialGradient from "./Components/DonutWithRadialGradient";
import PieChart3D from "./Components/PieChart3D";
import PieChartWithBrokenDownSlices from "./Components/PieChartWithBrokenDownSlices";
import SimplePieChart from "./Components/SimplePieChart";
import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";


const PieChart = ({ match }) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.pie" />} match={match} />

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار پای ساده">
            <SimplePieChart />
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار دونات">
            <DonutChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="3D نمودار دونات">
            <DonutChart3D />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="پیراشکی با گرادیان شعاعی">
            <DonutWithRadialGradient />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار پای 3 بعدی">
            <PieChart3D />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار پای با برش های شکسته">
            <PieChartWithBrokenDownSlices />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PieChart;
