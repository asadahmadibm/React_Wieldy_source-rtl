import React from "react";
import { Card, Rate } from "antd";

const ClearStar = () => {
  return (
    <Card className="gx-card" title="پاک کردن ستاره">
      <div className="gx-mb-2"><Rate defaultValue={3} /> اجازه ی پاک کردن : بله</div>

      <div className="gx-mb-0"><Rate allowClear={false} defaultValue={3} />اجازه ی پاک کردن : خیر</div>
    </Card>
  );
};

export default ClearStar;
