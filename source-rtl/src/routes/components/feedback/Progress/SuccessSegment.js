import React from "react";
import { Card, Progress, Tooltip } from "antd";

const SuccessSegment = () => {
  return (
    <Card title="بخش موفقیت" className="gx-card">
      <Tooltip title="3 انجام شده / 3 در حال انجام / 4 برای انجام">
        <Progress percent={60} successPercent={30} />
      </Tooltip>
    </Card>
  );
};

export default SuccessSegment;
