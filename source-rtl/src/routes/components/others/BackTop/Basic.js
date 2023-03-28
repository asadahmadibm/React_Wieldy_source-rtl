import React from "react";
import {BackTop, Card} from "antd";

const Basic = () => {
  return (
    <Card title="پایه" className="gx-card">
      <BackTop/>
      برای دیدن پایین سمت راست به پایین بروید
      <strong className="gx-text-grey"> خاکستری </strong>
      دکمه.
    </Card>
  );
};

export default Basic;
