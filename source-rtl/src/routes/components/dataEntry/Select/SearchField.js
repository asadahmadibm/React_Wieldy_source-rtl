import React from "react";
import { Card, Select } from "antd";

const Option = Select.Option;


const SearchField = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  function handleBlur() {
    console.log('blur');
  }

  function handleFocus() {
    console.log('focus');
  }

  return (
    <Card className="gx-card" title="قسمت جستجو">
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="شخصی را انتخاب کنید"
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="jack">رضا</Option>
        <Option value="lucy">سارا</Option>
        <Option value="tom">محسن</Option>
      </Select>
    </Card>
  );
};

export default SearchField;
