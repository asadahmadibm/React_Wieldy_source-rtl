import React from "react";
import {Badge, Card} from "antd";

const Status = () => {
  return (
    <Card className="gx-card" title="وضعیت">
      <Badge status="success"/>
      <Badge status="error"/>
      <Badge status="default"/>
      <Badge status="processing"/>
      <Badge status="warning"/>
      <br/>
      <Badge status="success" text="موفقیت"/>
      <br/>
      <Badge status="error" text="خطا"/>
      <br/>
      <Badge status="default" text="پیش فرض"/>
      <br/>
      <Badge status="processing" text="در حال پردازش"/>
      <br/>
      <Badge status="warning" text="هشدار"/>
    </Card>
  );
};

export default Status;
