import React from "react";
import { Card, TimePicker } from "antd";
import moment from "moment";

const format = 'HH:mm';

const HourMinute = () => {
  return (
    <Card className="gx-card" title="ساعت و دقیقه">
      <TimePicker defaultValue={moment('12:08', format)} format={format} />
    </Card>
  );
};

export default HourMinute;
