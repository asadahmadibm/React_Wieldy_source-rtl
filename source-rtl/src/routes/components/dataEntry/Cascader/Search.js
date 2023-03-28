import React from "react";
import {Card, Cascader} from "antd";

const options = [{
  value: 'zhejiang',
  label: 'زیبا',
  children: [{
    value: 'hangzhou',
     label: 'حسینی',
    children: [{
      value: 'xihu',
       label: 'نزدیک دریاچه',
    }, {
      value: 'xiasha',
       label: 'صمیمی',
      disabled: true,
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

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

function filter(inputValue, path) {
  return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
}


const Search = () => {
  return (
    <Card className="gx-card" title="جستجو">
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="لطفا انتخاب کنید"
        showSearch={{filter}}
      />
    </Card>
  );
};

export default Search;
