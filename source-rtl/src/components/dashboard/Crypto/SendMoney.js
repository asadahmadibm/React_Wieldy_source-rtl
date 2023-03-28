import React from "react";
import {Table} from "antd";
import Widget from "components/Widget/index";

import avatar1 from '../../../ad-images/avatar-1.png';
import avatar2 from '../../../ad-images/avatar-2.png';
import avatar3 from '../../../ad-images/avatar-3.png';
import avatar4 from '../../../ad-images/avatar-4.png';

const columns = [
  {
    title: 'نام صاحب حساب',
    dataIndex: 'image',
    render: (text, record) => {
      return <div className="gx-flex-row gx-align-items-center">
        <img className="gx-rounded-circle gx-size-30 gx-ml-2" src={text} alt=""/>
        <p className="gx-mb-0">{record.name}</p>
      </div>
    },
  },
  {
    title: 'آخرین انتقال',
    dataIndex: 'transfer',
    render: (text, record) => {
      return <span className="gx-text-grey">{record.transfer}</span>
    },

  },
  {
    title: 'عمل',
    dataIndex: 'status',
    render: (text) => {
      return <span className="gx-text-primary gx-pointer">
        <i className="icon icon-forward gx-fs-sm gx-ml-2"/>{text}</span>
    },
  },

];

const data = [
  {
    key: '1',
    name: 'سارا حسینی',
    transfer: '2 ساعت پیش',
    image: avatar1,
    status: 'پرداخت'
  },
  {
    key: '2',
    name: 'سعید زمانی',
    transfer: '17 روز پیش',
    image: avatar2,
    status: 'پرداخت'
  },
  {
    key: '3',
    name: 'محمود حیدری',
    transfer: '1 ماه پیش',
    image: avatar3,
    status: 'پرداخت'
  },
  {
    key: '4',
    name: 'صابر محوری',
    transfer: '1 ماه پیش',
    image: avatar4,
    status: 'پرداخت'
  }
];

const SendMoney = () => {
  return (
    <Widget
      title={
        <h2 className="h4 gx-text-capitalize gx-mb-0">
          ارسال پول به</h2>
      } extra={
      <p className="gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block">
        <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"/> حساب جدید اضافه کنید</p>
    }>
      <div className="gx-table-responsive">
        <Table className="gx-table-no-bordered" columns={columns} dataSource={data} pagination={false}
               size="small"/>
      </div>
      <p className="gx-text-primary gx-mb-0 gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3">
        <i className="icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"/> حساب جدید اضافه کنید</p>
    </Widget>
  );
};

export default SendMoney;
