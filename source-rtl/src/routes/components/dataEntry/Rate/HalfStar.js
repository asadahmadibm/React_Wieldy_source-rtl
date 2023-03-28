import React from "react";
import { Card, Rate } from "antd";

const HalfStar = () => {
  return (
    <Card className="gx-card" title="ستاره نصفه">
      <Rate allowHalf defaultValue={2.5} />
    </Card>
  );
};

export default HalfStar;
