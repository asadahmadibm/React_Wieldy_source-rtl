import React from "react";
import { Card, Col, Row } from "antd";

import LineBarAreaComposedChart from "./Components/LineBarAreaComposedChart";
import VerticalComposedChart from "./Components/VerticalComposedChart";
import SameDataComposedChart from "./Components/SameDataComposedChart";
import ComposedChartWithAxisLabels from "./Components/ComposedChartWithAxisLabels";
import ContainerHeader from "components/ContainerHeader";
import IntlMessages from "util/IntlMessages";

const ComposedChart = ({ match }) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.bar" />} match={match} />

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار نوار خط نمودار">
            <LineBarAreaComposedChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار مرکب عمودی">
            <VerticalComposedChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار داده های مشابه">
            <SameDataComposedChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار با برچسب های محور">
            <ComposedChartWithAxisLabels />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ComposedChart;
