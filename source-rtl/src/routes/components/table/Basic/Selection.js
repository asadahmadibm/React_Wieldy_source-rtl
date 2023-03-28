import React from "react";
import {Card, Table} from "antd";

const columns = [{
  title: 'نام',
  dataIndex: 'name',
  render: text => <span className="gx-link">{text}</span>,
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
}, {
  key: '4',
  name: 'کاربر غیرفعال',
  age: 99,
  address: 'تبریز میدان امام',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Selection = () => {
  return (
    <Card title="جدول دارای انتخابگر">
      <Table className="gx-table-responsive" rowSelection={rowSelection} columns={columns} dataSource={data}/>
    </Card>
  );
};

export default Selection;
