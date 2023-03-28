import React from "react";
import { Card, Collapse } from "antd";

const Panel = Collapse.Panel;


const text = `
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
`;

const NoArrow = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <Card className="gx-card" title="بدون فلش">
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="این هدر صفحه با نماد پیکان است" key="1">
          <p>{text}</p>
        </Panel>
        <Panel showArrow={false} header="این هدر صفحه است بدون نماد پیکان" key="2">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default NoArrow;
