import React from "react";
import {Breadcrumb, Card} from "antd";

const Basic = () => {
  return (
    <Card className="gx-card" title="پایه">
      <Breadcrumb>
        <Breadcrumb.Item>خانه</Breadcrumb.Item>
        <Breadcrumb.Item><span className="gx-link">مرکز برنامه</span></Breadcrumb.Item>
        <Breadcrumb.Item><span className="gx-link">لیست برنامه ها</span></Breadcrumb.Item>
        <Breadcrumb.Item>برنامه</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
};

export default Basic;
