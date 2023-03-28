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
      code: 752100,
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
      code: 453400,
    }],
  }],
}];

function handleAreaClick(e, label, option) {
  e.stopPropagation();
  console.log('clicked', label, option);
}

const ChangeOnSelect = () => {
  const displayRender = (labels, selectedOptions) => labels.map((label, i) => {
    const option = selectedOptions[i];
    if (i === labels.length - 1) {
      return (
        <span key={option.value}>
        {label} (<span className="gx-link" onClick={e => handleAreaClick(e, label, option)}>{option.code}</span>)
      </span>
      );
    }
    return <span key={option.value}>{label} / </span>;
  });
  return (
    <Card className="gx-card" title="تغییر را انتخاب کنید">
      <Cascader
        options={options}
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        displayRender={displayRender}
        style={{width: '100%'}}
      />
    </Card>
  );
};

export default ChangeOnSelect;
