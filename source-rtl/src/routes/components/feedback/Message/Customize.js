import React from "react";
import {Button, Card, message} from "antd";

const success = () => {
  message.success('این یک پیام سریع برای موفقیت است و در 10 ثانیه از بین می رود', 10);
};

const Customize = () => {
  return (
    <Card title="سفارشی" className="gx-card">
      <Button onClick={success}>مدت زمان نمایش سفارشی</Button>
    </Card>
  );
};

export default Customize;
