import React from "react";
import {Card, Checkbox, Col, Row} from "antd";

function onChange(checkedValues) {
  console.log('checked = ', checkedValues);
}


const UseWithGrid = () => {
  return (
    <Card className="gx-card" title="با شبکه استفاده کنید">
      <Checkbox.Group style={{width: '100%'}} onChange={onChange}>
        <Row>
          <Col span={8}><Checkbox className="gx-mb-3" value="A">الف</Checkbox></Col>
          <Col span={8}><Checkbox className="gx-mb-3" value="B">ب</Checkbox></Col>
          <Col span={8}><Checkbox className="gx-mb-3" value="C">پ</Checkbox></Col>
          <Col span={8}><Checkbox className="gx-mb-3" value="D">ت</Checkbox></Col>
          <Col span={8}><Checkbox className="gx-mb-3" value="E">ث</Checkbox></Col>
        </Row>
      </Checkbox.Group>
    </Card>
  );
};

export default UseWithGrid;
