import React from "react";
import { Button, Card, Popover } from "antd";

const content = (
  <div>
    <p>محتوا</p>
    <p>محتوا</p>
  </div>
);


const Trigger = () => {
  return (
    <Card className="gx-card" title="گیره">
      <Popover content={content} title="عنوان" trigger="hover">
        <Button>مرا معلق کن</Button>
      </Popover>
      <Popover content={content} title="عنوان" trigger="focus">
        <Button>مرا متمرکز کنید</Button>
      </Popover>
      <Popover content={content} title="عنوان" trigger="click">
        <Button>مرا کلیک کن</Button>
      </Popover>
    </Card>
  );
};

export default Trigger;
