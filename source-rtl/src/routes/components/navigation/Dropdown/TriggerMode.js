import React from "react";
import { Card, Dropdown, Icon, Menu } from "antd";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">مورد منو 1</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">مورد دوم فهرست</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">مورد منوی 3</Menu.Item>
  </Menu>
);

const TriggerMode = () => {
  return (
    <Card className="gx-card" title="حالت فعال">
      <Dropdown overlay={menu} trigger={['click']}>
        <span className="gx-link ant-dropdown-link">
          مرا کلیک کن <Icon type="down" />
        </span>
      </Dropdown>
    </Card>
  );
};

export default TriggerMode;
