import React from "react";
import {Card, Popover, Steps} from "antd";

const Step = Steps.Step;

const customDot = (dot, {status, index}) => (
  <Popover content={<span>مرحله {index} وضعیت: {status}</span>}>
    {dot}
  </Popover>
);

const CustomizedDotStyle = () => {
  return (
    <Card className="gx-card" title="سفارشی نقطه ای">
      <Steps current={1} progressDot={customDot}>
        <Step title="تمام شده" description="می توانید روی نقطه حرکت کنید."/>
        <Step title="در حال پیش رفت" description="می توانید روی نقطه حرکت کنید."/>
        <Step title="در انتظار" description="می توانید روی نقطه حرکت کنید."/>
        <Step title="در انتظار" description="می توانید روی نقطه حرکت کنید."/>
      </Steps>
    </Card>
  );
};

export default CustomizedDotStyle;
