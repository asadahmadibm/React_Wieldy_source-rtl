import React from "react";
import {Card, Steps} from "antd";

const Step = Steps.Step;

const VerticalVersion = () => {
  return (
    <Card className="gx-card" title="نسخه عمودی">
      <Steps direction="vertical" size="small" current={1}>
        <Step title="تمام شده" description="این یک توضیحات است."/>
        <Step title="در حال پیش رفت" description="این یک توضیحات است."/>
        <Step title="در انتظار" description="این یک توضیحات است."/>
      </Steps>
    </Card>
  );
};

export default VerticalVersion;
