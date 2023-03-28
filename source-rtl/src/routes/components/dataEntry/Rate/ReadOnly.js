import React from "react";
import { Card, Rate } from "antd";

const ReadOnly = () => {
  return (
    <Card className="gx-card" title="فقط خواندنی">
      <Rate disabled defaultValue={2} />
    </Card>
  );
}
  ;

export default ReadOnly;
