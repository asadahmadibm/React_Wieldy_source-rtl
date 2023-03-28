import React from "react";
import { Card, Input } from "antd";

const { TextArea } = Input;


const AutosizingTheHeight = () => {
  return (
    <Card className="gx-card" title="خودکار کردن ارتفاع">
      <div className="gx-mb-3">
        <TextArea placeholder="ارتفاع بر اساس اندازه ی خطوط" autosize />
      </div>
      <div className="gx-mb-3">
        <TextArea placeholder="ارتفاع با حداقل و حداکثر تعداد خطوط"
          autosize={{ minRows: 2, maxRows: 6 }} />
      </div>
    </Card>
  );
};

export default AutosizingTheHeight;
