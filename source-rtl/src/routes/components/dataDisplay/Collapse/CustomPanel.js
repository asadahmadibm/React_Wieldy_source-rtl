import React from "react";
import { Card, Collapse } from "antd";

const Panel = Collapse.Panel;


const text = `
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
`;

const customPanelStyle = {
  borderRadius: 4,
  border: 0,
  overflow: 'hidden',
};

const CustomPanel = () => {

  return (
    <Card className="gx-card" title="پنل سفارشی سازی شده">
      <Collapse className="gx-collapse-custom" bordered={false} defaultActiveKey={['1']}>
        <Panel header="این هدر صفحه 1 است" key="1" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="این هدر صفحه 2 است" key="2" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="این هدر صفحه 3 است" key="3" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default CustomPanel;
