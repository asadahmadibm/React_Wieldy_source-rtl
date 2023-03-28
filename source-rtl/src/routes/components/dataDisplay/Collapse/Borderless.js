import React from "react";
import { Card, Collapse } from "antd";

const Panel = Collapse.Panel;

const text = (
  <p style={{ paddingLeft: 24 }}>
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
  </p>
);


const Borderless = () => {

  return (
    <Card className="gx-card" title="بدون مرز">
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="این هدر صفحه 1 است" key="1">
          {text}
        </Panel>
        <Panel header="این هدر صفحه 2 است" key="2">
          {text}
        </Panel>
        <Panel header="این هدر صفحه 3 است" key="3">
          {text}
        </Panel>
      </Collapse>
    </Card>

  );
};

export default Borderless;
