import React from "react";
import { Card, Pagination } from "antd";

const Basic = () => {
  return (
    <Card className="gx-card" title="صفحه بندی پایه">
      <Pagination defaultCurrent={1} total={50} />
    </Card>
  );
};

export default Basic;
