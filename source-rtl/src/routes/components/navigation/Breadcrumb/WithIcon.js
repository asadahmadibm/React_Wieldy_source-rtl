import React from "react";
import { Breadcrumb, Card, Icon } from "antd";

const WithIcon = () => {
  return (
    <Card className="gx-card" title="با آیکن">
      <Breadcrumb>
        <Breadcrumb.Item>
          <span className="gx-link">
            <Icon type="home" />
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="gx-link">
            <Icon type="user" />
            <span>لیست برنامه ها</span>
          </span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          برنامه ها
        </Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  );
};

export default WithIcon;
