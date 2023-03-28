import React from "react";
import { Card, Table } from "antd";

const columns = [{
  title: 'نام',
  dataIndex: 'name',
  render: text => <span className="gx-link">{text}</span>,
}, {
  title: 'دارایی های نقدی',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'آدرس',
  dataIndex: 'address',
}];

const data = [{
  key: '1',
  name: 'نیما زمانی',
  money: '￥300,000.00',
  address: 'تهران خیابان انقلاب',
}, {
  key: '2',
  name: 'محسن امانی',
  money: '￥1,256,000.00',
  address: 'اصفهان خیابان امام',
}, {
  key: '3',
  name: 'زهره احمدی',
  money: '￥120,000.00',
  address: 'تبریز میدان امام',
}];

const Title = () => {
  return (
    <Card title="عنوان برای جدول ها">
      <Table className="gx-table-responsive"
        columns={columns}
        dataSource={data}
        bordered
        title={() => 'عنوان جدول در اینجا'}
        footer={() => 'پاورقی'}
      />
    </Card>
  );
};

export default Title;
