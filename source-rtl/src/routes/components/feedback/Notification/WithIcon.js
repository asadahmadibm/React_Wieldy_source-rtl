import React from "react";
import {Button, Card, notification} from "antd";

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'عنوان اعلان',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  });
};

const WithIcon = () => {
  return (
    <Card title="با آیکن" className="gx-card">
      <Button onClick={() => openNotificationWithIcon('success')}>موفقیت</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>اطلاعات</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>هشدار</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>خطا</Button>
    </Card>
  );
};

export default WithIcon;
