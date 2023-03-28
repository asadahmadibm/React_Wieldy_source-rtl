import React from "react";
import { Alert, Card } from "antd";

const Banner = () => {
  return (
    <Card title="بنر" className="gx-card">
      <Alert message="متن هشدار" banner />
      <Alert message="لورم ایپسوم متن ساختگی با تولید سادگی" banner closable />
      <Alert showIcon={false} message="هشدار متن بدون نماد" banner />
      <Alert type="error" message="متن خطا" banner />
    </Card>
  );
};

export default Banner;
