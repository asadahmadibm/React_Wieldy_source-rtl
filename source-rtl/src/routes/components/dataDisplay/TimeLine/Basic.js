import React from "react";
import {Card, Timeline} from "antd";

const Basic = () => {
  return (
    <Card title="پایه" className="gx-card">
      <Timeline>
        <Timeline.Item>ایجاد یک سایت خدمات 1398-09-01</Timeline.Item>
        <Timeline.Item>حل مشکلات اولیه شبکه 1398-09-01</Timeline.Item>
        <Timeline.Item>تست فنی 1398-09-01</Timeline.Item>
        <Timeline.Item>حل مشکلات شبکه 1398-09-01</Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default Basic;
