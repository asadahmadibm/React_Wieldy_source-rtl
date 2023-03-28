import React from "react";
import { Table } from "antd";
import Widget from "components/Widget/index";

const columns = [
  {
    title: 'واحد پول',
    dataIndex: 'currency',
  },
  {
    title: 'ریال',
    dataIndex: 'fee',
  },
  {
    title: 'تاریخ',
    dataIndex: 'date',
  },
  {
    title: 'هزینه',
    dataIndex: 'rate',
    render: (text) => {
      return <span className="gx-text-red">{text}</span>
    },
  }
];

const data = [
  {
    key: '1',
    currency: '24 ریال',
    rate: '1 ریال = ریال740',
    date: '08.10.98',
    fee: 'ریال 233'
  },
  {
    key: '2',
    currency: '34 ریال',
    rate: '1 ریال = ریال80',
    date: '08.10.98',
    fee: 'ریال 123'
  },
  {
    key: '3',
    currency: '24 ریال',
    rate: '1 ریال = ریال740',
    date: '08.10.98',
    fee: 'ریال 322'
  },
  {
    key: '4',
    currency: '22 ریال',
    rate: '1 ریال = ریال740',
    date: '08.10.98',
    fee: 'ریال 322'
  },
  {
    key: '5',
    currency: '74 ریال',
    rate: '1 ریال = ریال99',
    date: '08.10.98',
    fee: 'ریال 221'
  }
];

const OrderHistory = () => {
  return (
    <Widget styleName="gx-order-history"
      title={
        <h2 className="h4 gx-text-capitalize gx-mb-0">
          تاریخچه سفارش ها</h2>
      } extra={
        <p className="gx-text-primary gx-mb-0 gx-pointer">تاریخچه تفصیلی</p>
      }>
      <div className="gx-table-responsive">
        <Table className="gx-table-no-bordered" columns={columns} dataSource={data} pagination={false} bordered={false}
          size="small" />
      </div>
    </Widget>
  );
};

export default OrderHistory;
