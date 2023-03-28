import React from "react";
import { Card, Pagination } from "antd";

const TotalNumber = () => {
  return (
    <Card className="gx-card" title="صفحه بندی با تعداد کل ">
      <Pagination
        total={85}
        showTotal={total => `کل ${total} موارد`}
        pageSize={20}
        defaultCurrent={1}
      />
      <br />
      <Pagination
        total={85}
        showTotal={(total, range) => `${range[0]}-${range[1]} از ${total} آیتم`}
        pageSize={20}
        defaultCurrent={1}
      /></Card>
  );
};

export default TotalNumber;
