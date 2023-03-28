import React from "react";
import { Card, TimePicker } from "antd";

const IntervalOption = () => {
  return (
    <Card className="gx-card" title="ویژگی فاصله">
      <TimePicker minuteStep={15} secondStep={10} />
    </Card>
  );
};

export default IntervalOption;
