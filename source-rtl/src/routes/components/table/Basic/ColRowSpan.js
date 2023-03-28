import React from "react";
import {Card, Table} from "antd";
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

const columns = [{
  title: 'نام',
  dataIndex: 'name',
  render: (text, row, index) => {
    if (index < 4) {
      return <span className="gx-link">{text}</span>;
    }
    return {
      children: <span className="gx-link">{text}</span>,
      props: {
        colSpan: 5,
      },
    };
  },
}, {
  title: 'سن',
  dataIndex: 'age',
  render: renderContent,
}, {
  title: 'تلفن خانه',
  colSpan: 2,
  dataIndex: 'tel',
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 2) {
      obj.props.rowSpan = 2;
    }
    // These two are merged into above cell
    if (index === 3) {
      obj.props.rowSpan = 0;
    }
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  },
}, {
  title: 'شماره تماس',
  colSpan: 0,
  dataIndex: 'phone',
  render: renderContent,
}, {
  title: 'آدرس',
  dataIndex: 'address',
  render: renderContent,
}];

const data = [{
  key: '1',
  name: 'نیما زمانی',
  age: 32,
  tel: '0571-22098909',
  phone: 18889898989,
  address: 'تهران خیابان انقلاب',
}, {
  key: '2',
  name: 'محسن امانی',
  tel: '0571-22098333',
  phone: 18889898888,
  age: 42,
  address: 'اصفهان خیابان امام',
}, {
  key: '3',
  name: 'زهره احمدی',
  age: 32,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'تبریز میدان امام',
}, {
  key: '4',
  name: 'کمیل خرسندی',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'مشهد خیابان وکیل آباد',
}, {
  key: '5',
  name: 'احمد وضعی',
  age: 18,
  tel: '0575-22098909',
  phone: 18900010002,
  address: 'مشهد خیابان وکیل آباد',
}];

const ColRowSpan = () => {
    return (
      <Card title="ColSpan و RowSpan در جدول">
        <Table className="gx-table-responsive" columns={columns} dataSource={data} bordered/>
      </Card>
    );
  }
;

export default ColRowSpan;
