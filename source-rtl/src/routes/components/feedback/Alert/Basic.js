import React from "react";
import { Alert, Card } from "antd";

import "./basic.less";

const Basic = () => {
  return (
    <Card title="پایه" className="gx-card">
      <Alert message="متن موفقیت" type="success" />
    </Card>
  );
};

export default Basic;
