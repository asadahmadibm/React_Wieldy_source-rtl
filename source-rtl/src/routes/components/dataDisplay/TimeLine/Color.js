import React from "react";
import { Card, Timeline } from "antd";

const Color = () => {
  return (
    <Card title="رنگ" className="gx-card">
      <Timeline>
        <Timeline.Item color="green">ایجاد یک سایت خدمات 1398-09-01</Timeline.Item>
        <Timeline.Item color="green">ایجاد یک سایت خدمات 1398-09-01</Timeline.Item>
        <Timeline.Item color="red">
          <p>حل مشکلات اولیه شبکه 1</p>
          <p>حل مشکلات اولیه شبکه 2</p>
          <p>حل مشکلات اولیه شبکه 3 1398-09-01</p>
        </Timeline.Item>
        <Timeline.Item>
          <p>تست فنی 1</p>
          <p>تست فنی 2</p>
          <p>تست فنی 3 1398-09-01</p>
        </Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default Color;
