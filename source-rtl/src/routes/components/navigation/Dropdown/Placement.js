import React from "react";
import { Button, Card, Dropdown, Menu } from "antd";

import "./placement.less";

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">مورد منو 1</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">مورد دوم فهرست</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">مورد منوی 3</a>
    </Menu.Item>
  </Menu>
);

const Placement = () => {
  return (
    <Card className="gx-card" title="تعیین سطح">
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>پایین چپ</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button>پایین وسط</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>پایین راست</Button>
      </Dropdown>
      <br />
      <Dropdown overlay={menu} placement="topLeft">
        <Button>بالا چپ</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topCenter">
        <Button>بالا وسط</Button>
      </Dropdown>
      <Dropdown overlay={menu} placement="topRight">
        <Button>بالا راست</Button>
      </Dropdown>
    </Card>
  );
};

export default Placement;
