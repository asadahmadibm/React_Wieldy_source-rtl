import React from "react";
import { Card, Dropdown, Icon, Menu, message } from "antd";

const onClick = function ({ key }) {
  message.info(`Click on item ${key}`);
};
const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">مورد منو 1</Menu.Item>
    <Menu.Item key="2">مورد 2 منو</Menu.Item>
    <Menu.Item key="3">مورد منوی 3</Menu.Item>
  </Menu>
);
const ClickEvent = () => {
  return (
    <Card className="gx-card" title="رویداد را کلیک کنید">
      <Dropdown overlay={menu}>
        <span className="gx-link ant-dropdown-link">
          من را معلق بگیرید, مرا کلیک کن <Icon type="down" />
        </span>
      </Dropdown>
    </Card>
  );
};

export default ClickEvent;
