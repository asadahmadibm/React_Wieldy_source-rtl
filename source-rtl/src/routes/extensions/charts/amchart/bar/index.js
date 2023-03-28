import React from "react";
import { Card, Col, Row } from "antd";

import ContainerHeader from "components/ContainerHeader";
import ColumnWithRotatedSeries from "./Components/ColumnWithRotatedSeries";
import IntlMessages from "util/IntlMessages";
import SimpleColumnChart from "./Components/SimpleColumnChart";
import ColumnAndLineMix from "./Components/ColumnAndLineMix";
import Cylinder3DChart from "./Components/Cylinder3DChart";
import Column3DChart from "./Components/Column3DChart";
import LayeredColumnChart from "./Components/LayeredColumnChart";
import StackedbarChartWithNegativeValues from "./Components/StackedbarChartWithNegativeValues";
import StackedBarChart from "../../recharts/bar/Components/StackedBarChart";
import StackedColumnChart from "./Components/StackedColumnChart";
import ColumnChartWithImagesOnTop from "./Components/ColumnChartWithImagesOnTop";
import ClusteredBarChart from "./Components/ClusteredBarChart";
import Bar3DChart from "./Components/Bar3DChart";
import BarAndLineChartMix from "./Components/BarAndLineChartMix";
import FloatingBarChart from "./Components/FloatingBarChart";
import Stacked3DColumnChart from "./Components/Stacked3DColumnChart";

const BarChart = ({ match }) => {
  return (
    <div className="gx-main-content">
      <ContainerHeader title={<IntlMessages id="sidebar.chart.bar" />} match={match} />

      <Row>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="ستون با سری چرخش">
            <ColumnWithRotatedSeries />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار ستون ساده">
            <SimpleColumnChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="ستون و خط میکس">
            <ColumnAndLineMix />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار نوار انباشته شده با ارزش های منفی">
            <StackedbarChartWithNegativeValues />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار ستون سه بعدی">
            <Column3DChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار سیلندر سه بعدی">
            <Cylinder3DChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار ستون لایه ای">
            <LayeredColumnChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار ستون 3D انباشته شده">
            <Stacked3DColumnChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار ستون لایه ای">
            <FloatingBarChart />
          </Card>
        </Col>


        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نوار و خط نمودار میکس">
            <BarAndLineChartMix />
          </Card>
        </Col>


        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار نوار 3D">
            <Bar3DChart />
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="ستون و خط میکس">
            <ClusteredBarChart />
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار ستون با تصاویر در بالا">
            <ColumnChartWithImagesOnTop />
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="ستون با سری چرخش">
            <ColumnWithRotatedSeries />
          </Card>
        </Col>

        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار بارگذاری شده">
            <StackedBarChart />
          </Card>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Card className="gx-card" title="نمودار ستون انباشته">
            <StackedColumnChart />
          </Card>
        </Col>

      </Row>
    </div>
  );
};

export default BarChart;
