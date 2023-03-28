import React from "react";
import { Button, Card } from "antd";

const GhostButton = () => {
  return (
    <Card title="دکمه های محو" className="gx-card gx-bg-grey">
      <Button type="primary" ghost>اولیه</Button>
      <Button ghost>پیش فرض</Button>
      <Button type="dashed" ghost>خراب شده</Button>
      <Button type="danger" ghost>خطر</Button>
    </Card>
  );
};

export default GhostButton;
