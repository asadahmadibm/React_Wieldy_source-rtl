import React from "react";
import {Card, Table} from "antd";

const columns = [
  {title: 'نام', dataIndex: 'name', key: 'name'},
  {title: 'سن', dataIndex: 'age', key: 'age'},
  {title: 'آدرس', dataIndex: 'address', key: 'address'},
  {title: 'اقدام', dataIndex: '', key: 'x', render: () => <span className="gx-link">حذف</span>},
];

const data = [
  {
    key: 1,
    name: 'نیما زمانی',
    age: 32,
    address: 'تهران خیابان انقلاب',
    description: 'نام من  نیما زمانی است ، من 32 ساله هستم ، در دریاچه شماره 1 دریاچه پارک نیویورک زندگی می کنم.'
  },
  {
    key: 2,
    name: 'محسن امانی',
    age: 42,
    address: 'اصفهان خیابان امام',
    description: 'نام من محسن امانی است ، من 32 ساله هستم ، در دریاچه شماره 1 دریاچه پارک نیویورک زندگی می کنم.'
  },
  {
    key: 3,
    name: 'زهره احمدی',
    age: 32,
    address: 'تبریز میدان امام',
    description: 'نام من زهره احمدی است ، من 32 ساله هستم ، در دریاچه شماره 1 دریاچه پارک نیویورک زندگی می کنم.'
  },
];

const ExpandableRow = () => {
  return (
    <Card title="اکسپند شدن سطرها">
      <Table className="gx-table-responsive"
             columns={columns}
             expandedRowRender={record => <p style={{margin: 0}}>{record.description}</p>}
             dataSource={data}
      />
    </Card>
  );
};

export default ExpandableRow;
