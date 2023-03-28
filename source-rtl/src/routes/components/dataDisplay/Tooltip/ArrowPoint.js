import React from "react";
import { Button, Card, Tooltip } from "antd";

const ArrowPoint = () => {
  return (
    <Card title="نشانگر فلش" className="gx-card">
      <Tooltip placement="topLeft" title="متن نمایشی">
        <Button>تراز لبه </Button>
      </Tooltip>
      <Tooltip placement="topLeft" title="متن نمایشی" arrowPointAtCenter>
        <Button>پیکان به مرکز</Button>
      </Tooltip>
    </Card>
  );
};

export default ArrowPoint;
