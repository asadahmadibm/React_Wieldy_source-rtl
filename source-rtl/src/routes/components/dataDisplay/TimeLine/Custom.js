import React from "react";
import { Card, Icon, Timeline } from "antd";

const Custom = () => {
  return (
    <Card title="سفارشی شده" className="gx-card">
      <Timeline>
        <Timeline.Item>ایجاد یک سایت خدمات 1398-09-01</Timeline.Item>
        <Timeline.Item>حل مشکلات اولیه شبکه 1398-09-01</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">تست فنی 1398-09-01</Timeline.Item>
        <Timeline.Item>حل مشکلات شبکه 1398-09-01</Timeline.Item>
      </Timeline>
    </Card>
  );
}
  ;

export default Custom;
