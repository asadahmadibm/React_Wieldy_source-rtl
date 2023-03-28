import React from "react";
import {Button, Card, message} from "antd";

const info = () => {
  message.info('این یک پیام عادی است');
};

const Basic = () => {
  return (
    <Card title="پایه" className="gx-card">
      <Button type="primary" onClick={info}>نمایش پیام عادی</Button>
    </Card>
  );
};

export default Basic;
