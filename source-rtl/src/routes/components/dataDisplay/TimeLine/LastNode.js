import React from "react";
import { Card, Timeline } from "antd";

const LastNode = () => {
  return (
    <Card title="آخرین گره" className="gx-card">
      <Timeline pending="ثبت...">
        <Timeline.Item>ایجاد یک سایت خدمات 1398-09-01</Timeline.Item>
        <Timeline.Item>حل مشکلات اولیه شبکه 1398-09-01</Timeline.Item>
        <Timeline.Item>تست فنی 1398-09-01</Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default LastNode;
