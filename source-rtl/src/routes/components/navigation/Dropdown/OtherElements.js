import React from "react";
import { Card, Dropdown, Icon, Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">مورد منو 1</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">مورد دوم فهرست</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>مورد منوی 3 (غیر فعال)</Menu.Item>
  </Menu>
);

const OtherElements = () => {
  return (
    <Card className="gx-card" title="عناصر دیگر">
      <Dropdown overlay={menu}>
        <span className="gx-link ant-dropdown-link">
          مرا معلق کن<Icon type="down" />
        </span>
      </Dropdown>
    </Card>
  );
};

export default OtherElements;
