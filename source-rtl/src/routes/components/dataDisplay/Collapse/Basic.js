import React from "react";
import {Card, Collapse} from "antd";

import "./basic.less";

const Panel = Collapse.Panel;


const text = `
 طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید
`;

const Basic = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <Card className="gx-card" title="پایه">
      <Collapse defaultActiveKey={['1']} onChange={callback}>
        <Panel header="این هدر صفحه 1 است" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="این هدر صفحه 2 است" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="این هدر صفحه 3 است" key="3" disabled>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default Basic;
