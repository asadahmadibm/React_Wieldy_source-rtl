import React from "react";
import { Card, Icon, Steps } from "antd";

const Step = Steps.Step;

const WithIcon = () => {
  return (
    <Card className="gx-card" title="با آیکون">
      <Steps>
        <Step status="finish" title="ثبت نام" icon={<Icon type="user" />} />
        <Step status="finish" title="اعتبارسنجی" icon={<Icon type="solution" />} />
        <Step status="process" title="پرداخت" icon={<Icon type="loading" />} />
        <Step status="wait" title="پایان" icon={<Icon type="smile-o" />} />
      </Steps>
    </Card>
  );
};

export default WithIcon;
