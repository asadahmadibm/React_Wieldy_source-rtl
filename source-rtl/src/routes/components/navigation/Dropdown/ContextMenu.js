import React from "react";
import { Card, Dropdown, Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="1">مورد منو 1</Menu.Item>
    <Menu.Item key="2">مورد دوم فهرست</Menu.Item>
    <Menu.Item key="3">مورد منوی 3</Menu.Item>
  </Menu>
);

const ContextMenu = () => {
  return (
    <Card className="gx-card" title="فهرست زمینه">
      <Dropdown overlay={menu} trigger={['contextMenu']}>
        <span style={{ userSelect: 'none' }}>روی من کلیک راست کنید</span>
      </Dropdown>
    </Card>
  );
};

export default ContextMenu;

