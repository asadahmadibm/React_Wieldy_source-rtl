import React from "react";
import {Card, Table} from "antd";

const columns = [
  {title: 'نام کامل', width: 100, dataIndex: 'name', key: 'name', fixed: 'right'},
  {title: 'سن', width: 100, dataIndex: 'age', key: 'age', fixed: 'right'},
  {title: 'ستون 1', dataIndex: 'address', key: '1'},
  {title: 'ستون 2', dataIndex: 'address', key: '2'},
  {title: 'ستون 3', dataIndex: 'address', key: '3'},
  {title: 'ستون 4', dataIndex: 'address', key: '4'},
  {title: 'ستون 5', dataIndex: 'address', key: '5'},
  {title: 'ستون 6', dataIndex: 'address', key: '6'},
  {title: 'ستون 7', dataIndex: 'address', key: '7'},
  {title: 'ستون 8', dataIndex: 'address', key: '8'},
  {
    title: 'عمل',
    key: 'operation',
    fixed: 'left',
    width: 100,
    render: () => <span className="gx-link">عمل</span>,
  },
];

const data = [{
  key: '1',
  name: 'نیما زمانی',
  age: 32,
  address: 'پارک سوسن',
}, {
  key: '2',
  name: 'محسن امانی',
  age: 40,
  address: 'پارک نسترن',
}];

const FixColumn = () => {
  return (
    <Card title="ستون فیکس">
      <Table columns={columns} dataSource={data} scroll={{x: 1300}}/>
    </Card>
  );
};

export default FixColumn;
