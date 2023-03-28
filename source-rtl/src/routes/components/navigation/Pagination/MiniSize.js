import React from "react";
import { Card, Pagination } from "antd";

const MiniSize = () => {
  function showTotal(total) {
    return `کل ${total} موارد`;
  }

  return (
    <Card className="gx-card" title="صفحه بندی با حداقل صفحات">
      <Pagination size="small" total={50} />
      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      <Pagination size="small" total={50} showTotal={showTotal} />
    </Card>
  );
};

export default MiniSize;
