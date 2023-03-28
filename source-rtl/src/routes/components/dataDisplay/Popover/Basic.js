import React from "react";
import { Button, Card, Popover } from "antd";

const content = (
  <div>
    <p>محتوا</p>
    <p>محتوا</p>
  </div>
);


const Basic = () => {
  return (
    <Card className="gx-card" title="پایه">
      <Popover content={content} title="عنوان">
        <Button type="primary">مرا معلق کن</Button>
      </Popover>
    </Card>
  );
};

export default Basic;
