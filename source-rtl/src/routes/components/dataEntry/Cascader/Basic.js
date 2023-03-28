import React from "react";
import {Card, Cascader} from "antd";

const options = [{
  value: 'zhejiang',
  label: 'منو',
  children: [{
    value: 'jumbo',
    label: 'جی کوئری',
    children: [{
      value: 'opstion',
       label: 'نزدیک دریاچه',
    }],
  }],
}, {
  value: 'menu',
   label: 'منو 1',
  children: [{
    value: 'opstion 1',
     label: 'جامبو',
    children: [{
      value: 'opstion 2',
      label: 'react',
    }],
  }],
}];

function onChange(value) {
  console.log(value);
}

const Basic = () => {
  return (
    <Card className="gx-card" title="پایه">
      <Cascader options={options} onChange={onChange} placeholder="لطفا انتخاب کنید"/>
    </Card>
  );
};

export default Basic;
