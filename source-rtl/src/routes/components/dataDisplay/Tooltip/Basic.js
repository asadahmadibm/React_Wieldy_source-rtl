import React from "react";
import { Card, Tooltip } from "antd";

const Basic = () => {
  return (
    <Card title="پایه" className="gx-card">
      <Tooltip title="متن نمایشی">
        <span>هنگام ورود ماوس ، Tooltip نشان داده می شود.</span>
      </Tooltip>
    </Card>
  );
};

export default Basic;
