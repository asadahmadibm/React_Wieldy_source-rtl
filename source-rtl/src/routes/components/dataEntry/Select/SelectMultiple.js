import React from "react";
import { Card, Select } from "antd";

const Option = Select.Option;


const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const SelectMultiple = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Card className="gx-card" title="انتخاب چندتایی">
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="لطفا انتخاب کنید"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
      >
        {children}
      </Select>
    </Card>
  );
};

export default SelectMultiple;
