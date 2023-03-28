import React from "react";
import { Card, Input } from "antd";

import "./threeSizesOfInput.less";

const ThreeSizesOfInput = () => {
  return (
    <Card className="gx-card" title="سه اندازه از ورودی">
      <div className="gx-mb-3">
        <Input size="large" placeholder="سایز بزرگ" />
      </div>
      <div className="gx-mb-3">
        <Input placeholder="سایز پیش فرض" />
      </div>
      <div className="gx-mb-3">
        <Input size="small" placeholder="سایز کوچک" />
      </div>
    </Card>

  );
};

export default ThreeSizesOfInput;
