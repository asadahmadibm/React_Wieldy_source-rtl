import React from "react";
import {Card, Divider, Icon, Table} from "antd";

const columns = [
  {
    title: 'نام',
    dataIndex: 'name',
    key: 'name',
    render: text => <span className="gx-link">{text}</span>,
  },
  {
    title: 'سن',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'آدرس',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'عمل',
    key: 'action',
    render: (text, record) => (
      <span>
      <span className="gx-link">عمل 一 {record.name}</span>
      <Divider type="vertical"/>
      <span className="gx-link">حذف</span>
      <Divider type="vertical"/>
      <span className="gx-link ant-dropdown-link">
      اقدامات بیشتر<Icon type="down"/>
      </span>
    </span>
    ),
  }
];

const data = [
  {
    key: '1',
    name: 'نیما زمانی',
    age: 32,
    address: 'تهران خیابان انقلاب',
  },
  {
    key: '2',
    name: 'محسن امانی',
    age: 42,
    address: 'اصفهان خیابان امام',
  },
  {
    key: '3',
    name: 'زهره احمدی',
    age: 32,
    address: 'تبریز میدان امام',
  }
];

const Simple = () => {
  return (
    <Card title="جدول معمولی">
      <Table className="gx-table-responsive" columns={columns} dataSource={data}/>
    </Card>
  );
};

export default Simple;
