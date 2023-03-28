import {Col, Row} from "antd";
import React from "react";
import {Bar, BarChart, ResponsiveContainer, Tooltip} from "recharts";

import Widget from "components/Widget/index";

const data = [
  {name: 'صفحه A', queries: 400},
  {name: 'صفحه B', queries: 600},
  {name: 'صفحه C', queries: 800},
  {name: 'صفحه D', queries: 1200},
  {name: 'صفحه E', queries: 800},
  {name: 'صفحه F', queries: 600},
  {name: 'صفحه G', queries: 300},
  {name: 'صفحه H', queries: 900},
  {name: 'صفحه A', queries: 400},
  {name: 'صفحه B', queries: 600},
  {name: 'صفحه C', queries: 800},
  {name: 'صفحه D', queries: 1200},
];

const QueriesCard = () => {
  return (
    <Widget>
      <div className="gx-d-flex">
        <p className="gx-text-uppercase gx-chart-title">نمایش داده شد</p>
        <p className="gx-mr-auto gx-text-primary">67% <i className="icon icon-menu-up gx-fs-sm"/></p>
      </div>
      <Row>
        <Col lg={14} md={12} sm={24} xs={24} className="gx-pr-2">
          <div className="gx-pt-2">
            <h2 className="gx-fs-xxxl gx-font-weight-medium gx-mb-1 gx-text-black">430000 ریال</h2>
            <p className="gx-mb-2 gx-mb-md-0">نامه ، وب سایت و تماس</p>
          </div>
        </Col>
        <Col lg={10} md={12} sm={24} xs={24}>
          <ResponsiveContainer width="100%" height={60}>
            <BarChart data={data}
                      margin={{top: 0, right: 0, left: 0, bottom: 0}}>
              <Tooltip/>
              <defs>
                <linearGradient id="color08" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="5%" stopColor="#23DFDC" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#63AEE4" stopOpacity={0.9}/>
                </linearGradient>
              </defs>
              <Bar dataKey="queries" fill="url(#color08)" barSize={4}/>
            </BarChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </Widget>
  );
};

export default QueriesCard;
