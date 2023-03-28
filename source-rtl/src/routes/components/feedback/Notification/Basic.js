import React from "react";
import {Button, Card, notification} from "antd";

const openNotification = () => {
  notification.open({
    message: 'عنوان اعلان',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  });
};

const Basic = () => {
  return (
    <Card title="پایه" className="gx-card">
      <Button type="primary" onClick={openNotification}>کادر اطلاع رسانی را باز کنید</Button>
    </Card>
  );
};

export default Basic;
