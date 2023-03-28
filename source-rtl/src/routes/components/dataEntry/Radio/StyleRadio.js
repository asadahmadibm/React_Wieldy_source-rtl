import React from "react";
import { Card, Radio } from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const StyleRadio = () => {
  function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
  }

  return (
    <Card className="gx-card" title="استایل رادیویی">
      <div className="gx-mb-3">
        <RadioGroup onChange={onChange} defaultValue="a">
          <RadioButton value="a">سارا</RadioButton>
          <RadioButton value="b">زیبا</RadioButton>
          <RadioButton value="c">نیما</RadioButton>
          <RadioButton value="d">حسین</RadioButton>
        </RadioGroup>
      </div>
      <div className="gx-mb-3">
        <RadioGroup onChange={onChange} defaultValue="a">
          <RadioButton value="a">سارا</RadioButton>
          <RadioButton value="b" disabled>سینا</RadioButton>
          <RadioButton value="c">نیما</RadioButton>
          <RadioButton value="d">حسین</RadioButton>
        </RadioGroup>
      </div>
      <div className="gx-mb-0">
        <RadioGroup disabled onChange={onChange} defaultValue="a">
          <RadioButton value="a">سارا</RadioButton>
          <RadioButton value="b">زیبا</RadioButton>
          <RadioButton value="c">نیما</RadioButton>
          <RadioButton value="d">حسین</RadioButton>
        </RadioGroup>
      </div>
    </Card>
  );
};

export default StyleRadio;
