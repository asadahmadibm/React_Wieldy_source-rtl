import React from "react";
import { Card, Tabs } from "antd";

const TabPane = Tabs.TabPane;

const CardTab = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <Card className="gx-card" title="کارت تب">
      <Tabs onChange={callback} type="card">
        <TabPane tab="تب 1" key="1">محتوای برگه صفحه 1</TabPane>
        <TabPane tab="تب 2" key="2">محتوای برگه صفحه 2</TabPane>
        <TabPane tab="تب 3" key="3">محتوای برگه صفحه 3</TabPane>
      </Tabs>
    </Card>
  );
}
  ;

export default CardTab;
