import React from "react";
import {Button, Card, notification} from "antd";

const close = () => {
  console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
};

const openNotification = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      تایید
    </Button>
  );
  notification.open({
    message: 'عنوان اعلان',
    description: 'پس از بسته شدن نوتیفیکیشن (به صورت خودکار پس از زمان "مدت" دستی) یک عملکرد فراخوانی می شود.',
    btn,
    key,
    onClose: close,
  });
};

const CustomClose = () => {
  return (
    <Card title="بستن سفارشی" className="gx-card">
      <Button type="primary" onClick={openNotification}>
        کادر اطلاع رسانی را باز کنید
      </Button>
    </Card>
  );
};

export default CustomClose;
