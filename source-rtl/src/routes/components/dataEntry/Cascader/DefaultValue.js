import React from "react";
import {Card, Cascader} from "antd";

const options = [{
  value: 'menu',
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

const DefaultValue = () => {
  return (
    <Card className="gx-card" title="مقدار پیش فرض">
      <Cascader defaultValue={['menu', 'jumbo', 'opstion']} options={options} onChange={onChange}/>
    </Card>
  );
};

export default DefaultValue;
