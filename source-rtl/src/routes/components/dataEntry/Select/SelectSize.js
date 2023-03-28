import React from "react";
import { Card, Radio, Select } from "antd";

import "./selectSize.less";

const Option = Select.Option;


const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

class SeclectSize extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <Card className="gx-card" title="انتخاب سایز">
        <Radio.Group className="gx-mb-2" value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">بزرگ</Radio.Button>
          <Radio.Button value="default">متوسط</Radio.Button>
          <Radio.Button value="small">کوچک</Radio.Button>
        </Radio.Group>

        <Select className="gx-w-100 gx-mb-3"
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </Select>

        <Select className="gx-w-100 gx-mb-3"
          mode="tags"
          size={size}
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
        >
          {children}
        </Select>

        <Select className="gx-w-100 gx-mb-3"
          mode="multiple"
          size={size}
          placeholder="لطفا انتخاب کنید"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </Select>

        <Select className="gx-w-100"
          mode="tags"
          size={size}
          placeholder="لطفا انتخاب کنید"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: '100%' }}
        >
          {children}
        </Select>
      </Card>
    );
  }
}

export default SeclectSize;
