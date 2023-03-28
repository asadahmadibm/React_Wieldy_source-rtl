import React from "react";
import { Card, Popconfirm } from "antd";

const LocaleText = () => {

  return (
    <Card title="متن محلی" className="gx-card">
      <Popconfirm title="شما مطمئن هستید؟" okText="بله" cancelText="خیر">
        <span className="gx-link">حذف</span>
      </Popconfirm>
    </Card>
  );
}
  ;

export default LocaleText;
