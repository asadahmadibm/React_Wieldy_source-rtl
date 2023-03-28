import React from "react";
import {Alert, Card} from "antd";

const MoreType = () => {
  return (
    <Card title="نوع بیشتر" className="gx-card">
      <Alert message="متن موفقیت" type="success"/>
      <Alert message="متن اطلاعات" type="info"/>
      <Alert message="متن هشدار" type="warning"/>
      <Alert message="متن خطا" type="error"/>
    </Card>
  );
};

export default MoreType;
