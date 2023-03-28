import React from "react";
import {Button, Card, Modal} from "antd";

const Manual = () => {
  function success() {
    const modal = Modal.success({
      title: 'این یک پیام اعلان است',
      content: 'این مودال بعد از 1 ثانیه از بین می رود',
    });
    setTimeout(() => modal.destroy(), 1000);
  }

  return (
    <Card title="دستی" className="gx-card">
      <Button onClick={success}>موفقیت</Button>
    </Card>
  );
};

export default Manual;
