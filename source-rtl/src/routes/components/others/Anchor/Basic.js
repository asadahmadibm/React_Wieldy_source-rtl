import React from "react";
import {Anchor, Card} from "antd";

const {Link} = Anchor;

const Basic = () => {
  return (
    <Card title="پایه" className="gx-card">
      <Anchor>
        <Link href="#basic-demo" title="نسخه ی نمایشی اساسی"/>
        <Link href="#fixed-demo" title="نسخه ی نمایشی ثابت"/>
        <Link href="#api" title="API">
          <Link href="#anchor-props" title="لنگر ویژگی"/>
          <Link href="#link-props"  title="ارتباط ویژگی"/>
        </Link>
      </Anchor>
    </Card>
  );
};

export default Basic;
