import React from "react";
import {Button, Card, message} from "antd";

import "./otherType.less";

const success = () => {
  message.success('این پیام موفقیت است');
};

const error = () => {
  message.error('این یک پیام خطاست');
};

const warning = () => {
  message.warning('این پیام هشدار است');
};
const OtherType = () => {
  return (
    <Card title="انواع دیگر" className="gx-card">
      <Button onClick={success}>موفقیت</Button>
      <Button onClick={error}>خطا</Button>
      <Button onClick={warning}>هشدار</Button>
    </Card>
  );
};

export default OtherType;
