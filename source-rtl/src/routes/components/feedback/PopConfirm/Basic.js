import React from "react";
import { Card, message, Popconfirm } from "antd";

const Basic = () => {
  function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
  }

  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }

  return (
    <Card title="پایه" className="gx-card">
      <Popconfirm title="مطمئن هستید این کار را حذف می کنید؟" onConfirm={confirm} onCancel={cancel} okText="بله"
        cancelText="خیر">
        <span className="gx-link">حذف</span>
      </Popconfirm>
    </Card>
  );
};

export default Basic;
