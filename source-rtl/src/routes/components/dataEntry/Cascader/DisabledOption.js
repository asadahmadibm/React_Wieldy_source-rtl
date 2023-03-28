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
      label: 'نزدیک دریاچه',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'حسن',
  disabled: true,
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

const DisabledOption = () => {
  return (
    <Card className="gx-card" title="گزینه غیرفعال شده است">
      <Cascader options={options} onChange={onChange} placeholder="لطفا انتخاب کنید" />
    </Card>
  );
}
  ;

export default DisabledOption;
