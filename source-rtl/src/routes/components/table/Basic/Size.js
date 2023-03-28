import React from "react";
import {Card, Table} from "antd";

const columns = [{
  title: 'نام',
  dataIndex: 'name',
}, {
  title: 'سن',
  dataIndex: 'age',
}, {
  title: 'آدرس',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'نیما زمانی',
  age: 32,
  address: 'تهران خیابان انقلاب',
}, {
  key: '2',
  name: 'محسن امانی',
  age: 42,
  address: 'اصفهان خیابان امام',
}, {
  key: '3',
  name: 'زهره احمدی',
  age: 32,
  address: 'تبریز میدان امام',
}];

const Size = () => {
  return (
    <Card title="سایزبندی جدول">
      <h4>جدول اندازه متوسط</h4>
      <Table className="gx-table-responsive" columns={columns} dataSource={data} size="middle"/>
      <h4>جدول اندازه کوچک</h4>
      <Table className="gx-table-responsive" columns={columns} dataSource={data} size="small"/>
    </Card>
  );
};

export default Size;
