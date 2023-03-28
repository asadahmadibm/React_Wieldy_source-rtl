import React from "react";
import {Card, Table} from "antd";

const columns = [{
  title: 'نام',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'سن',
  dataIndex: 'age',
  key: 'age',
  width: '12%',
}, {
  title: 'آدرس',
  dataIndex: 'address',
  width: '30%',
  key: 'address',
}];

const data = [{
  key: 1,
  name: 'زیبا محمدی',
  age: 60,
  address: 'تهران خیابان انقلاب',
  children: [{
    key: 11,
    name: 'نیما زمانی',
    age: 42,
    address: 'تهران خیابان انقلاب',
  }, {
    key: 12,
    name: 'حسن محمدی',
    age: 30,
    address: 'تهران خیابان انقلاب',
    children: [{
      key: 121,
      name: 'سارا کیانی',
      age: 16,
      address: 'تهران خیابان انقلاب',
    }],
  }, {
    key: 13,
    name: 'کیان شایان',
    age: 72,
    address: 'اصفهان خیابان امام',
    children: [{
      key: 131,
      name: 'محسن امانی',
      age: 42,
      address: 'مشهد خیابان وکیل آباد',
      children: [{
        key: 1311,
        name: 'نیما افشانی',
        age: 25,
        address: 'اصفهان خیابان امام',
      }, {
        key: 1312,
        name: 'سعید احمدی',
        age: 18,
        address: 'اصفهان خیابان امام',
      }],
    }],
  }],
}, {
  key: 2,
  name: 'زهره احمدی',
  age: 32,
  address: 'تبریز میدان امام',
}];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const TreeData = () => {
    return (
      <Card title="دیتای درختی">
        <Table className="gx-table-responsive" columns={columns} rowSelection={rowSelection} dataSource={data}/>
      </Card>
    );
  }
;

export default TreeData;
