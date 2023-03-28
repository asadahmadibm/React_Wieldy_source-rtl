import React from "react";
import { Card, Cascader } from "antd";

const options = [{
  value: 'zhejiang',
  label: 'زیبا',
  children: [{
    value: 'hangzhou',
    label: 'حسینی',
    children: [{
      value: 'xihu',
      label: 'غرب دریاچه',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'حسن',
  children: [{
    value: 'nanjing',
    label: 'امیدی',
    children: [{
      value: 'zhonghuamen',
      label: 'خیابان اصلی',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}


const Size = () => {
  return (
    <Card className="gx-card" title="سایز">
      <Cascader placeholder="لطفا انتخاب کنید" size="large" options={options} onChange={onChange} /><br /><br />
      <Cascader placeholder="لطفا انتخاب کنید" options={options} onChange={onChange} /><br /><br />
      <Cascader placeholder="لطفا انتخاب کنید" size="small" options={options} onChange={onChange} /><br /><br />
    </Card>
  );
};

export default Size;
