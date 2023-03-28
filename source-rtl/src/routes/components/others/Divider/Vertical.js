import React from "react";
import {Card, Divider} from "antd";

const Vertical = () => {
  return (
    <Card className="gx-card" title="عمودی">
      متن
      <Divider type="vertical"/>
      <span className="gx-link">ارتباط دادن</span>
      <Divider type="vertical"/>
      <span className="gx-link">ارتباط دادن</span>
    </Card>
  );
};

export default Vertical;
