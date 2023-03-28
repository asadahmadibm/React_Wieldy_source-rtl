import React from "react";
import { Button, Card } from "antd";

const Disabled = () => {
  return (
    <Card className="gx-card" title="غیرفعال">
      <Button type="primary">اولیه</Button>
      <Button type="primary" disabled>اولیه (غیر فعال)</Button>
      <br />
      <Button>پیش فرض</Button>
      <Button disabled>پیش فرض (غیر فعال)</Button>
      <br />
      <Button type="dashed">خراب شده</Button>
      <Button type="dashed" disabled>خراب شده (غیر فعال)</Button>
      <div className="gx-bg-grey gx-px-3 gx-pt-3">
        <Button>شبح</Button>
        <Button disabled>شبح (غیر فعال)</Button>
      </div>
    </Card>
  );
};

export default Disabled;
