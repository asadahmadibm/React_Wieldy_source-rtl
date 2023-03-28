import React from "react";
import { Anchor, Card } from "antd";

const { Link } = Anchor;

const Static = () => {
  return (
    <Card title="استاتیک" className="gx-card">
      <Anchor affix={false}>
        <Link href="#basic-demo" title="نسخه ی نمایشی اساسی" />
        <Link href="#fixed-demo;" title="نسخه ی نمایشی ثابت" />
        <Link href="#api" title="API">
          <Link href="#anchor-props" title="لنگر ویژگی" />
          <Link href="#link-props" title="ارتباط ویژگی" />
        </Link>
      </Anchor>
    </Card>
  );
};

export default Static;
