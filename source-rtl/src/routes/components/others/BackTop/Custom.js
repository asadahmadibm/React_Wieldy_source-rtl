import React from "react";
import { BackTop, Card } from "antd";

const Custom = () => {
  return (
    <Card id="components-back-top-demo-custom" title="شخصی سازی" className="gx-card">
      <BackTop>
        <div className="ant-back-top-inner">بالا</div>
      </BackTop>
      برای دیدن پایین سمت راست به پایین بروید
      <strong className="gx-text-primary"> آبی </strong>
      دکمه.
    </Card>
  );
};

export default Custom;
