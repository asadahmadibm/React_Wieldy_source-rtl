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

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}

const Hover = () => {
  return (
    <Card className="gx-card" title="شناور">
      <Cascader
        options={options}
        expandTrigger="hover"
        displayRender={displayRender}
        onChange={onChange}
        placeholder="لطفا انتخاب کنید"
      />
    </Card>
  );
};

export default Hover;
