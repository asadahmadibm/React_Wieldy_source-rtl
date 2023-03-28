import React from "react";
import { Card, Collapse } from "antd";

const Panel = Collapse.Panel;


const text = `
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
`;

const NestedPanel = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <Card className="gx-card" title="پنل تو در تو">
      <Collapse onChange={callback}>
        <Panel header="این هدر صفحه 1 است" key="1">
          <Collapse defaultActiveKey="1">
            <Panel header="این پنل  قسمت قسمت است" key="1">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="این هدر صفحه 2 است" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="این هدر صفحه 3 است" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default NestedPanel;
