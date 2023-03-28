import React from "react";
import { Card, Pagination } from "antd";

const SimpleMode = () => {
  return (
    <Card className="gx-card" title="صفحه بندی ساده">
      <Pagination simple defaultCurrent={2} total={50} />
    </Card>
  );
};

export default SimpleMode;
