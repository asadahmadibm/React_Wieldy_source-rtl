import React from "react";
import {Card, Select} from "antd";

const Option = Select.Option;

const Basic = () => {
    function handleChange(value) {
      console.log(`selected ${value}`);
    }

    return (
      <Card className="gx-card" title="پایه">
        <Select className="gx-ml-3 gx-mb-3" defaultValue="lucy" style={{width: 120}} onChange={handleChange}>
          <Option value="jack">رضا</Option>
          <Option value="lucy">سارا</Option>
          <Option value="disabled" disabled>غیرفعال</Option>
          <Option value="Yiminghe">احمد</Option>
        </Select>
        <Select className="gx-mb-3" defaultValue="lucy" style={{width: 120}} allowClear disabled>
          <Option value="lucy">سارا</Option>
        </Select>
      </Card>
    );
  }
;

export default Basic;
