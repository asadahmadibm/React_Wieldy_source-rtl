import React from "react";
import { Button, Card } from "antd";

const Icon = () => {
  return (<Card className="gx-card" title="آیکون">
    <Button type="primary" shape="circle" icon="search" />
    <Button type="primary" icon="search">جستجو</Button>
    <Button shape="circle" icon="search" />
    <Button icon="search">جستجو</Button>
    <br />
    <Button shape="circle" icon="search" />
    <Button icon="search">جستجو</Button>
    <Button type="dashed" shape="circle" icon="search" />
    <Button type="dashed" icon="search">جستجو</Button>
  </Card>
  );
};

export default Icon;
