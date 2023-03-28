import React from "react";
import { Card, Progress } from "antd";

const CustomTextBar = () => {
  return (
    <Card title="نوار متن سفارشی" className="gx-card">
      <Progress type="circle" percent={75} format={percent => `${percent} روز`} />
      <Progress type="circle" percent={100} format={() => 'پایان'} />
    </Card>
  );
};

export default CustomTextBar;
