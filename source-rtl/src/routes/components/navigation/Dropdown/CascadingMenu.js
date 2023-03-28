import React from "react";
import { Card, Dropdown, Icon, Menu } from "antd";

const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item>مورد منو 1</Menu.Item>
    <Menu.Item>مورد دوم فهرست</Menu.Item>
    <SubMenu title="زیر منو">
      <Menu.Item>مورد منوی 3</Menu.Item>
      <Menu.Item>مورد منو 4</Menu.Item>
    </SubMenu>
    <SubMenu title="زیر منو غیرفعال" disabled>
      <Menu.Item>مورد منو 5</Menu.Item>
      <Menu.Item>مورد منو 6</Menu.Item>
    </SubMenu>
  </Menu>
);

const CascadingMenu = () => {
  return (
    <Card className="gx-card" title="منوی آبشاری">
      <Dropdown overlay={menu}>
        <span className="gx-link ant-dropdown-link">
          منوی آبشار<Icon type="down" />
        </span>
      </Dropdown>
    </Card>
  );
};

export default CascadingMenu;
