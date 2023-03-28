import React from "react";
import { Breadcrumb, Card } from "antd";

const ConfiguringSeparator = () => {
  return (
    <Card className="gx-card" title="جداکننده">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>خانه</Breadcrumb.Item>
        <Breadcrumb.Item><span className="gx-link">مرکز برنامه</span></Breadcrumb.Item>
        <Breadcrumb.Item><span className="gx-link">لیست برنامه</span></Breadcrumb.Item>
        <Breadcrumb.Item>برنامه</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
}
  ;

export default ConfiguringSeparator;
