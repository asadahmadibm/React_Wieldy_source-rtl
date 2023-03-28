import React from "react";
import {Card, Steps} from "antd";

const Step = Steps.Step;

const MiniVersion = () => {
  return (
    <Card className="gx-card" title="نسخه کوتاه">
      <Steps size="small" current={1}>
        <Step title="تمام شده"/>
        <Step title="در حال پیش رفت"/>
        <Step title="در انتظار"/>
      </Steps>
    </Card>
  );
};

export default MiniVersion;
