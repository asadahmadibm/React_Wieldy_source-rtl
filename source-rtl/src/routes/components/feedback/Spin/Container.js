import React from "react";
import { Card, Spin } from "antd";

const Container = () => {
  return (
    <Card title="کانتینر" className="gx-card">
      <Spin className="gx-loader-container" />
    </Card>
  );
};

export default Container;
