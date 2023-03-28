import React from "react";
import {Card, Table} from "antd";

const columns = [{
  title: 'نام',
  dataIndex: 'name',
  key: 'name',
  width: 100,
  fixed: 'right',
  filters: [{
    text: 'Joe',
    value: 'Joe',
  }, {
    text: 'John',
    value: 'John',
  }],
  onFilter: (value, record) => record.name.indexOf(value) === 0,
}, {
  title: 'Other',

  children: [{
    title: 'سن',
    dataIndex: 'age',
    key: 'age',
    width: 200,
    sorter: (a, b) => a.age - b.age,
  }, {
    title: 'آدرس',
    children: [{
      title: 'Street',
      dataIndex: 'street',
      key: 'street',
      width: 200,
    }, {
      title: 'مسدود کردن',
      children: [{
        title: 'ساختن',
        dataIndex: 'building',
        key: 'building',
        width: 100,
      }, {
        title: 'درب شماره',
        dataIndex: 'number',
        key: 'number',
        width: 100,
      }],
    }],
  }],
}, {
  title: 'شرکت',
  children: [{
    title: 'آدرس شرکت',
    dataIndex: 'companyAddress',
    key: 'companyAddress',
  }, {
    title: 'نام شرکت',
    dataIndex: 'companyName',
    key: 'companyName',
  }],
}, {
  title: 'جنسیت',
  dataIndex: 'gender',
  key: 'gender',
  width: 60,
  fixed: 'left',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'نیما زمانی',
    age: i + 1,
    street: 'پارک دریاچه ',
    building: 'C',
    number: 2035,
    companyAddress: 'دریاچه خیابان 42',
    companyName: 'ایده پردازان',
    gender: 'مرد',
  });
}
const GroupTable = () => {
  return (
    <Card title="جدول گروهی">
      <Table
        columns={columns}
        dataSource={data}
        bordered
        size="middle"
        scroll={{x: '130%', y: 240}}
      />
    </Card>
  );
};

export default GroupTable;
