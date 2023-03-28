import React from "react";
import { Card, Radio } from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const SizeRadio = () => {
  return (
    <Card className="gx-card" title="سایز رادیو">
      <div className="gx-mb-3">
        <RadioGroup defaultValue="a" size="large">
          <RadioButton value="a">سارا</RadioButton>
          <RadioButton value="b">زیبا</RadioButton>
          <RadioButton value="c">نیما</RadioButton>
          <RadioButton value="d">حسین</RadioButton>
        </RadioGroup>
      </div>
      <div className="gx-mb-3">
        <RadioGroup defaultValue="a">
          <RadioButton value="a">سارا</RadioButton>
          <RadioButton value="b">زیبا</RadioButton>
          <RadioButton value="c">نیما</RadioButton>
          <RadioButton value="d">حسین</RadioButton>
        </RadioGroup>
      </div>
      <div className="gx-mb-0">
        <RadioGroup defaultValue="a" size="small">
          <RadioButton value="a">سارا</RadioButton>
          <RadioButton value="b">زیبا</RadioButton>
          <RadioButton value="c">نیما</RadioButton>
          <RadioButton value="d">حسین</RadioButton>
        </RadioGroup>
      </div>
    </Card>
  );
};

export default SizeRadio;
