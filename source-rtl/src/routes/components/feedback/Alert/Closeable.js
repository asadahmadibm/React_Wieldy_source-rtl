import React from "react";
import { Alert, Card } from "antd";

const onClose = function (e) {
  console.log(e, 'I was closed.');
};

const Closeable = () => {
  return (
    <Card title="قابلیت بسته شدن" className="gx-card">
      <Alert
        message="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        type="warning"
        closable
        onClose={onClose}
      />
      <Alert
        message="متن خطا"
        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
        type="error"
        closable
        onClose={onClose}
      />
    </Card>
  );
}
  ;

export default Closeable;
