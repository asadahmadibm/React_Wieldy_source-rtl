import React from "react";
import { Button, Card, notification, Select } from "antd";

const { Option } = Select;
const options = ['بالاچپ', 'بالاراست', 'پایین چپ', 'پایین راست'];
const openNotification = () => {
  notification.open({
    message: 'عنوان اعلان',
    description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است',
  });
};

const Placement = () => {
  return (
    <Card title="تعیین موقعیت" className="gx-card">
      <Select className="gx-mb-2 gx-ml-2 gx-vertical-align-top"
        defaultValue="بالاچپ"
        style={{ width: 120 }}
        onChange={(val) => {
          notification.config({
            placement: val,
          });
        }}
      >
        {options.map(val => <Option key={val} value={val}>{val}</Option>)}
      </Select>
      <Button
        type="primary" className="gx-mb-2"
        onClick={openNotification}
      >
        کادر اطلاع رسانی را باز کنید
      </Button>
    </Card>
  );
};

export default Placement;
