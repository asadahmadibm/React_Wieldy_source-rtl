import React from "react";
import {Card, Checkbox} from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const Basic = () => {
  return (
    <Card className="gx-card" title="پایه">
      <Checkbox onChange={onChange}>کادر انتخاب</Checkbox>
    </Card>
  );
};

export default Basic;
