import React from "react";
import {Button, Card, Icon, notification} from "antd";

const openNotification = () => {
  notification.open({
    message: 'عنوان اعلان',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
    icon: <Icon type="smile-circle" style={{color: '#108ee9'}}/>,
  });
};

const CustomizeIcon = () => {
  return (
    <Card title="سفارشی سازی آیکن" className="gx-card">
      <Button type="primary" onClick={openNotification}>کادر اطلاع رسانی را باز کنید</Button>
    </Card>
  );
};

export default CustomizeIcon;
