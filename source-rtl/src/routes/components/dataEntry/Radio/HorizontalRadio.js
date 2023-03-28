import React from "react";
import { Card, Radio } from "antd";

const RadioGroup = Radio.Group;

class HorizontalRadio extends React.Component {
  state = {
    value: 1,
  };
  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <Card className="gx-card" title="رادیو افقی">
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>الف</Radio>
          <Radio value={2}>ب</Radio>
          <Radio value={3}>پ</Radio>
          <Radio value={4}>ت</Radio>
        </RadioGroup>
      </Card>
    );
  }
}

export default HorizontalRadio;
