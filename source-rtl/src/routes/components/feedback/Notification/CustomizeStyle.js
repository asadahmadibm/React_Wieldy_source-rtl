import React from "react";
import { Button, Card, notification } from "antd";

const openNotification = () => {
  notification.open({
    message: 'عنوان اعلان',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    style: {
      width: 600,
      marginLeft: 335 - 600,
    },
  });
};

const CustomizeStyle = () => {
  return (
    <Card title="تعیین موقعیت" className="gx-card">
      <Button type="primary" onClick={openNotification}>کادر اطلاع رسانی را باز کنید</Button>
    </Card>
  );
};

export default CustomizeStyle;
