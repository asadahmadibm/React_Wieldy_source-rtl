import React from "react";
import { Card, List } from "antd";

const data = [
  'لورم ایپسوم متن ساختگی با تولید سادگی',
  'صنعت چاپ و با استفاده از طراحان گرافیک',
  'شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع',
  'صنعت چاپ و با استفاده از طراحان گرافیک',
  'لورم ایپسوم متن ساختگی با تولید سادگی',
];

const SimpleList = () => {
  return (
    <Card className="gx-card" title="لیست ساده">
      <h5 className="gx-mb-3">سایز پیش فرض</h5>
      <List className="gx-mb-4"
        header={<div>سرتیتر</div>}
        footer={<div>پاورقی</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
      <h5 className="gx-mb-3">سایز کوچک</h5>
      <List className="gx-mb-4"
        size="small"
        header={<div>سرتیتر</div>}
        footer={<div>پاورقی</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
      <h5 className="gx-mb-3">سایز بزرگ</h5>
      <List className="gx-mb-0"
        size="large"
        header={<div>سرتیتر</div>}
        footer={<div>پاورقی</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
    </Card>
  );
};

export default SimpleList;
