import React from "react";
import { Button, Card, Popover } from "antd";

const text = <span>عنوان</span>;
const content = (
  <div>
    <p>محتوا</p>
    <p>محتوا</p>
  </div>
);


const ArrowPoint = () => {
  return (
    <Card className="gx-card" title="نشانگر فلش">
      <Popover placement="topLeft" title={text} content={content}>
        <Button>تراز لبه / 边缘对齐</Button>
      </Popover>
      <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
        <Button>پیکان به مرکز / 箭头指向中心</Button>
      </Popover>
    </Card>
  );
};

export default ArrowPoint;
