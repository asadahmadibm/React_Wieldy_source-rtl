import React from "react";
import { Card, Select } from "antd";

const { Option, OptGroup } = Select;


const SelectOption = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Card className="gx-card" title="انتخاب ویژگی">
      <Select
        defaultValue="lucy"
        style={{ width: 200 }}
        onChange={handleChange}
      >
        <OptGroup label="مدیر">
          <Option value="jack">رضا</Option>
          <Option value="lucy">سارا</Option>
        </OptGroup>
        <OptGroup label="مهندس">
          <Option value="Yiminghe">احمد</Option>
        </OptGroup>
      </Select>
    </Card>
  );
};

export default SelectOption;
