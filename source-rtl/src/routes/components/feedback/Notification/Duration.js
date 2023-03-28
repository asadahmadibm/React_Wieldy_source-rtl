import React from "react";
import { Button, Card, notification } from "antd";

const openNotification = () => {
  const args = {
    message: 'عنوان اعلان',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    duration: 0,
  };
  notification.open(args);
};

const Duration = () => {
  return (
    <Card title="مدت زمان" className="gx-card">
      <Button type="primary" onClick={openNotification}>کادر اطلاع رسانی را باز کنید</Button>
    </Card>
  );
};

export default Duration;
