import React from "react";
import {Button, Card} from "antd";

const Basic = () => {
  return (<Card className="gx-card" title="پایه">
      <Button type="primary">اولیه</Button>
      <Button>پیش فرض</Button>
      <Button type="dashed">خراب شده</Button>
      <Button type="danger">خطر</Button>
    </Card>
  );
};

export default Basic;
